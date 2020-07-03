import React from 'react';
import trash from '../images/icons/trash.svg';

export default function UpdateForm({ onUpdate, onCancel, onDelete, value, placeholder }) {
  return (
    <form onSubmit={onUpdate} className="update-form" noValidate>
      <input
        className="update-form__input"
        type="text"
        name="input"
        defaultValue={value}
        placeholder={placeholder}
        autoComplete="off"
      />
      <div className="update-form__buttons">
        <button type="submit" className="update-form__update-button">
          Update
        </button>
        <button onClick={onCancel} className="update-form__cancel-button">
          Cancel
        </button>
        <button onClick={onDelete} className="update-form__delete-button">
          <img src={trash} alt="delete" />
        </button>
      </div>
    </form>
  );
}
