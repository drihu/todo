import React, { useState } from "react";
import logo from "./images/todoisnt-logo.png";
import plus from "./images/icons/plus.svg";
import checkbox from "./images/icons/checkbox.svg";
import "./index.css";
import "./App.css";

function AddTaskButton({ onClick }) {
  return (
    <button onClick={onClick} className="add-task-button">
      <img src={plus} alt="add-task" /> Add Task
    </button>
  );
}

function CreateForm({ onSubmit, onCancel, placeholder }) {
  return (
    <form className="create-form" onSubmit={onSubmit} noValidate>
      <input
        className="create-form__input"
        type="text"
        name="input"
        placeholder={placeholder}
        autoComplete="off"
      />
      <button type="submit" className="create-form__add-button">
        Add
      </button>
      <button className="create-form__cancel-button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

function Task({ task }) {
  return (
    <article className="task">
      <img src={checkbox} className="task__checkbox" alt="task-radio" />
      {task}
    </article>
  );
}

function App() {
  const [isCreateFormActive, setIsCreateFormActive] = useState(false);
  const [tasks, setTasks] = useState([]);

  const submitCreateForm = (event) => {
    event.preventDefault();
    const taskname = event.target.input.value;
    if (taskname.length < 3) {
      alert("The task should be at least 3 characters long");
      return;
    }
    setTasks([...tasks, taskname]);
    event.target.input.value = "";
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="header__logo" alt="todoisnt-logo" />
      </header>

      <main className="main">
        <h1 className="main__title">Todos</h1>

        <section className="main__section">
          {tasks
            ? tasks.map((task, index) => <Task task={task} key={index} />)
            : null}
        </section>

        <section className="main__section">
          {!isCreateFormActive ? (
            <AddTaskButton onClick={() => setIsCreateFormActive(true)} />
          ) : (
            <CreateForm
              onSubmit={submitCreateForm}
              onCancel={() => setIsCreateFormActive(false)}
              placeholder={"Write a todo..."}
            />
          )}
        </section>

        <section className="main__section show-completed-button-container">
          <button className="show-completed-button">Show completed</button>
        </section>
      </main>
    </div>
  );
}

export default App;
