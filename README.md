📌 WhatsApp Chat UI (React + Green API)

🚀 Описание проекта:
 Простой чат для отправки и получения сообщений в WhatsApp с использованием Green API.

 🔧 Используемые технологии:
 - React (создание UI)
 - Green API (отправка и получение сообщений WhatsApp)
 - Fetch API (работа с HTTP-запросами)
 - CSS (базовые стили)

📥 Установка и запуск:
- Установить зависимости: npm install
- Запустить проект: npm start
- Настроить переменные окружения:
  Создайте файл .env в корне проекта и добавьте свои данные:
  1. REACT_APP_GREEN_API_ID=your_id_instance
  2. REACT_APP_GREEN_API_TOKEN=your_api_token
  Замените your_id_instance и your_api_token на свои данные из Green API.

💡 Как работает чат:
1. Пользователь вводит свои idInstance и apiTokenInstance (логин).
2. Вводит номер телефона получателя (в формате 79991234567).
3. Пишет и отправляет текстовое сообщение.
4. Сообщение отправляется в WhatsApp через Green API.
5. Если получатель отвечает, сообщение автоматически появляется в чате.

🎯 Основные файлы
 - App.js – главный компонент, переключает между логином и чатом.
 - Login.jsx – компонент авторизации.
 - Chat.jsx – компонент чата (отправка и получение сообщений).
 - App.css – стили проекта.

📷 Скриншоты
- ![1](https://github.com/user-attachments/assets/55e34f54-3d59-424a-8aa0-2236d1a8f177)
- ![2](https://github.com/user-attachments/assets/f2357dbc-f289-46b8-bd59-937b78bd12b0)
- ![3](https://github.com/user-attachments/assets/b0544da1-d247-4bb2-9127-f5273d755410)
- ![4](https://github.com/user-attachments/assets/5e1f92d8-3162-4a60-8e17-02636c801d97)
- ![5](https://github.com/user-attachments/assets/798654f2-18a5-4c4f-8cd8-4983360611a5)
- ![6](https://github.com/user-attachments/assets/b8acbb3a-4435-476f-abac-ea9ce3602965)
