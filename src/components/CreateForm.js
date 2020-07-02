import React from 'react';

export default function CreateForm({ onSubmit, onCancel, placeholder }) {
  return (
    <form onSubmit={onSubmit} className="create-form" noValidate>
      <input
        className="create-form__input"
        type="text"
        name="input"
        placeholder={placeholder}
        autoComplete="off"
      />
      <button type="submit" className="create-form__add-button">
        Add
      </button>
      <button onClick={onCancel} className="create-form__cancel-button">
        Cancel
      </button>
    </form>
  );
}
