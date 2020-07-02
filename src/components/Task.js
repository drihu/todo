import React, { useState } from 'react';
import checkbox from "../images/icons/checkbox.svg";
import checkedCheckbox from "../images/icons/checkbox-checked.svg";

export default function Task({ task, onCheck }) {
  const [image, setImage] = useState(checkbox);

  return (
    <article className="task">
      <img
        src={image}
        className="task__checkbox"
        alt="task-radio"
        onMouseEnter={() => setImage(checkedCheckbox)}
        onMouseLeave={() => setImage(checkbox)}
        onClick={onCheck}
      />
      {task.name}
    </article>
  );
}
