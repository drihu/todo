import React, { useState } from "react";
import Header from "./components/Header";
import CreateForm from "./components/CreateForm";
import Task from "./components/Task";
import ActionButton from "./components/ActionButton";
import IconButton from "./components/IconButton";
import PlusButton from "./components/PlusButton";
import Project from "./components/Project";
import inbox from "./images/icons/inbox.svg";
import right from "./images/icons/checvron-right.svg";
import bottom from "./images/icons/arrow-bottom.svg";
import "./index.css";
import "./App.css";

const COLORS = [
  "#1A202C",
  "#68D391",
  "#F6E05E",
  "#B04632",
  "#CD5A90",
  "#0079BF",
];

let previousTaskId = 0;
let previousProjectId = 0;

function App() {
  const [isCreateFormActive, setIsCreateFormActive] = useState(false);
  const [areCompletedTasksActive, setAreCompletedTasksActive] = useState(false);
  const [isCreateProjectShown, setIsCreateProjectShown] = useState(false);
  const [areProjectsShown, setAreProjectsShown] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const createTask = (event) => {
    event.preventDefault();
    const input = event.target.elements["input"];
    if (input.value.length < 3) {
      alert("The task should be at least 3 characters long");
      return;
    }
    const newTask = {
      id: ++previousTaskId,
      name: input.value,
      completed: false,
      projectId: activeProjectId,
    };
    setTasks([...tasks, newTask]);
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

  const uncompleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTask = { ...tasks[taskIndex] };
    newTask.completed = false;
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

  const createProject = (event) => {
    event.preventDefault();
    const input = event.target.elements["input"];
    const newProject = {
      id: ++previousProjectId,
      name: input.value,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    setProjects([...projects, newProject]);
    setActiveProjectId(previousProjectId);
    input.value = "";
  };

  return (
    <div className="app">
      <Header />
      <div className="app__container container">
        <aside className="app__aside">
          <IconButton
            value="Inbox"
            icon={inbox}
            onClick={() => setActiveProjectId(null)}
          />
          <IconButton
            value="Projects"
            icon={areProjectsShown ? bottom : right}
            onClick={() => setAreProjectsShown(!areProjectsShown)}
          />
          {areProjectsShown && (
            <>
              {projects.map((project) => (
                <Project
                  project={project}
                  key={project.id}
                  onClick={() => setActiveProjectId(project.id)}
                />
              ))}
              {isCreateProjectShown ? (
                <CreateForm
                  onCreate={createProject}
                  onCancel={() => setIsCreateProjectShown(false)}
                  placeholder="Project name"
                />
              ) : (
                <PlusButton
                  value="Create project"
                  onClick={() => setIsCreateProjectShown(true)}
                />
              )}
            </>
          )}
        </aside>

        <main className="app__main">
          <h1 className="main__title">
            {activeProjectId === null
              ? "Todos"
              : projects.find((project) => project.id === activeProjectId).name}
          </h1>

          <section className="main__tasks">
            {tasks
              .filter((task) => task.projectId === activeProjectId)
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
              <PlusButton
                value="Add task"
                onClick={() => setIsCreateFormActive(true)}
              />
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
                .filter((task) => task.projectId === activeProjectId)
                .filter((task) => task.completed)
                .map((task) => (
                  <Task
                    task={task}
                    onCheck={() => uncompleteTask(task.id)}
                    onUpdate={(event) => updateTask(event, task.id)}
                    onDelete={(event) => deleteTask(event, task.id)}
                    key={task.id}
                  />
                ))}
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
