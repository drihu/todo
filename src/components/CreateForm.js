import React from 'react';

export default function CreateForm({ onCreate, onCancel, placeholder }) {
  return (
    <form onSubmit={onCreate} className="create-form" noValidate>
      <input
        className="create-form__input"
        type="text"
        name="input"
        placeholder={placeholder}
        autoComplete="off"
      />
      <div className="create-form__buttons">
        <button type="submit" className="create-form__add-button">
          Add
        </button>
        <button onClick={onCancel} className="create-form__cancel-button">
          Cancel
        </button>
      </div>
    </form>
  );
}
