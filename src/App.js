import React, { useState } from "react";
import Header from "./components/Header";
import AddTaskButton from "./components/AddTaskButton";
import CreateForm from "./components/CreateForm";
import Task from "./components/Task";
import ShowCompletedButton from "./components/ShowCompletedButton";
import "./index.css";
import "./App.css";

function App() {
  const [isCreateFormActive, setIsCreateFormActive] = useState(false);
  const [lastId, setLastId] = useState(1);
  const [tasks, setTasks] = useState([]);

  const submitCreateForm = (event) => {
    event.preventDefault();
    const input = event.target.children[0];
    if (input.value.length < 3) {
      alert("The task should be at least 3 characters long");
      return;
    }
    const newTask = {
      id: lastId,
      name: input.value,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setLastId(lastId + 1);
    input.value = "";
  };

  const completeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1 className="main__title">Todos</h1>

        <section className="main__section">
          {tasks.filter((task) => !task.completed).map((task) => (
            <Task
              task={task}
              onCheck={() => completeTask(task.id)}
              key={task.id}
            />
          ))}
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
          <ShowCompletedButton />
        </section>
      </main>
    </div>
  );
}

export default App;
