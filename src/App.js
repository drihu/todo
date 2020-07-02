import React from "react";
import logo from "./images/todoisnt-logo.png";
import plus from "./images/icons/plus.svg";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="header__logo" alt="todoisnt-logo" />
      </header>
      <main className="main">
        <h1 className="main__title">Todos</h1>
        <button class="add-task-button">
          <img src={plus} alt="add-task" />
          Add Task
        </button>
        <button class="show-completed-button">Show completed</button>
      </main>
    </div>
  );
}

export default App;
