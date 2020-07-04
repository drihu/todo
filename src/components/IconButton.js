import React from 'react';

export default function IconButton({ icon, value, onClick }) {
  return (
    <button onClick={onClick} className="icon-button">
      <div className="icon-button__icon">
        <img src={icon} className="icon-button__icon-image" alt="icon" />
      </div>
      {value}
    </button>
  );
}
