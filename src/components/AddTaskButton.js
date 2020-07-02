import React from 'react';
import plus from "../images/icons/plus.svg";

export default function AddTaskButton({ onClick }) {
  return (
    <button onClick={onClick} className="add-task-button">
      <img src={plus} alt="add-task" />Add task
    </button>
  );
}
