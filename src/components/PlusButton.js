import React from 'react';
import plus from "../images/icons/plus.svg";

export default function PlusButton({ value, onClick }) {
  return (
    <button onClick={onClick} className="plus-button">
      <img src={plus} className="plus-button__icon" alt="plus" />
      {value}
    </button>
  );
}
