import React, { useState } from "react";

function Login({ onLogin }) {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ idInstance, apiTokenInstance });
  };

  return (
    <div className="login">
      <h2>Вход в WhatsApp Чат</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="idInstance"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="apiTokenInstance"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;
