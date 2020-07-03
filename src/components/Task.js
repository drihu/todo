import React, { useState } from "react";
import UpdateForm from "./UpdateForm";
import checkbox from "../images/icons/checkbox.svg";
import checkedCheckbox from "../images/icons/checkbox-checked.svg";

export default function Task({ task, onCheck, onUpdate, onDelete }) {
  const [image, setImage] = useState(checkbox);
  const [isUpdateFormActive, setIsUpdateFormActive] = useState(false);

  const onMouseEnter = () => {
    if (!task.completed) setImage(checkedCheckbox);
  };

  const onMouseLeave = () => {
    if (!task.completed) setImage(checkbox);
  };

  const onCancel = (event) => {
    setIsUpdateFormActive(false);
  };

  const onTaskUpdate = (event) => {
    onUpdate(event);
    setIsUpdateFormActive(false);
  }

  return (
    <article className={`task ${task.completed ? "task--completed" : ""}`}>
      {!isUpdateFormActive ? (
        <>
          <img
            src={!task.completed ? image : checkedCheckbox}
            className="task__checkbox"
            alt={task.completed ? "completed" : "uncompleted"}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onCheck}
          />
          <div
            onClick={() => setIsUpdateFormActive(true)}
            className="task__title"
          >
            {task.name}
          </div>
        </>
      ) : (
        <UpdateForm
          onUpdate={onTaskUpdate}
          onCancel={onCancel}
          onDelete={onDelete}
          value={task.name}
        />
      )}
    </article>
  );
}
