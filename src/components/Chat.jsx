import React, { useState, useEffect } from "react";

function Chat({ credentials }) {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!phone || !message) return;
    const response = await fetch(`https://api.green-api.com/waInstance${credentials.idInstance}/sendMessage/${credentials.apiTokenInstance}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId: `${phone}@c.us`, message }),
    });
    if (response.ok) {
      setMessages([...messages, { sender: "Вы", text: message }]);
      setMessage("");
    }
  };

  const fetchMessages = async () => {
    const response = await fetch(`https://api.green-api.com/waInstance${credentials.idInstance}/receiveNotification/${credentials.apiTokenInstance}`);
    if (response.ok) {
      const data = await response.json();
      if (data && data.body) {
        const incomingMessage = data.body.messageData?.textMessageData?.textMessage;
        const sender = data.body.senderData?.sender;
        if (incomingMessage && sender) {
          setMessages((prevMessages) => [...prevMessages, { sender: "Собеседник", text: incomingMessage }]);
        }
        // Удаляет уведомление, чтобы получать новые сообщения
        await fetch(`https://api.green-api.com/waInstance${credentials.idInstance}/deleteNotification/${credentials.apiTokenInstance}/${data.receiptId}`, {
          method: "DELETE"
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chat">
      <h2>Чат</h2>
      <input
        type="text"
        placeholder="Номер получателя"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>{msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Введите сообщение"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Отправить</button>
    </div>
  );
}

export default Chat;