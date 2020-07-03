import React, { useState } from "react";

export default function ActionButton({ onClick, values, className }) {
  const [text, setText] = useState(values[0]);

  const onAction = (event) => {
    onClick(event);
    if (text === values[0]) setText(values[1]);
    else setText(values[0]);
  };

  return (
    <button onClick={onAction} className={className}>{text}</button>
  );
}
