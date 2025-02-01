import React, { useState } from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  const [credentials, setCredentials] = useState(null);

  return (
    <div className="app">
      {!credentials ? (
        <Login onLogin={setCredentials} />
      ) : (
        <Chat credentials={credentials} />
      )}
    </div>
  );
}

export default App;
