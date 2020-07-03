import React, { useState } from "react";
import Header from "./components/Header";
import AddTaskButton from "./components/AddTaskButton";
import CreateForm from "./components/CreateForm";
import Task from "./components/Task";
import ActionButton from "./components/ActionButton";
import "./index.css";
import "./App.css";

function App() {
  const [isCreateFormActive, setIsCreateFormActive] = useState(false);
  const [areCompletedTasksActive, setAreCompletedTasksActive] = useState(false);
  const [lastId, setLastId] = useState(1);
  const [tasks, setTasks] = useState([]);

  const createTask = (event) => {
    event.preventDefault();
    const input = event.target.elements["input"];
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
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTask = { ...tasks[taskIndex] };
    newTask.completed = true;
    const newTasks = [
      ...tasks.slice(0, taskIndex),
      newTask,
      ...tasks.slice(taskIndex + 1),
    ];
    setTasks(newTasks);
  };

  const updateTask = (event, id) => {
    event.preventDefault();
    const input = event.target.elements["input"];
    if (input.value.length < 3) {
      alert("The task should be at least 3 characters long");
      return;
    }
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTask = { ...tasks[taskIndex] };
    newTask.name = input.value;
    const newTasks = [
      ...tasks.slice(0, taskIndex),
      newTask,
      ...tasks.slice(taskIndex + 1),
    ];
    setTasks(newTasks);
  };

  const deleteTask = (event, id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ];
    setTasks(newTasks);
  };

  const showOrHideCompletedTasks = () => {
    setAreCompletedTasksActive(!areCompletedTasksActive);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1 className="main__title">Todos</h1>

        <section className="main__tasks">
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <Task
                task={task}
                onCheck={() => completeTask(task.id)}
                onUpdate={(event) => updateTask(event, task.id)}
                onDelete={(event) => deleteTask(event, task.id)}
                key={task.id}
              />
            ))}
        </section>

        <section className="main__form-container">
          {!isCreateFormActive ? (
            <AddTaskButton onClick={() => setIsCreateFormActive(true)} />
          ) : (
            <CreateForm
              onCreate={createTask}
              onCancel={() => setIsCreateFormActive(false)}
              placeholder={"Write a todo..."}
            />
          )}
        </section>

        <footer className="main__completed-tasks">
          <ActionButton
            onClick={showOrHideCompletedTasks}
            values={["Show completed", "Hide"]}
            className="action-button"
          />
          {areCompletedTasksActive &&
            tasks
              .filter((task) => task.completed)
              .map((task) => <Task task={task} key={task.id} />)}
        </footer>
      </main>
    </div>
  );
}

export default App;
