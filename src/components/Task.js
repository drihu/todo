import React, { useState } from 'react';
import checkbox from "../images/icons/checkbox.svg";
import checkedCheckbox from "../images/icons/checkbox-checked.svg";

export default function Task({ task, onCheck }) {
  const [image, setImage] = useState(checkbox);

  const onMouseEnter = () => {
    if (!task.completed) setImage(checkedCheckbox);
  }

  const onMouseLeave = () => {
    if (!task.completed) setImage(checkbox);
  }

  return (
    <article className={`task ${task.completed ? 'task--completed' : ''}`}>
      <img
        src={!task.completed ? image : checkedCheckbox}
        className="task__checkbox"
        alt={task.completed ? 'completed' : 'uncompleted'}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onCheck}
      />
      <div className="task__title">{task.name}</div>
    </article>
  );
}
