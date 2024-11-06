// Todo.js
import React, { useState } from 'react';
import './Todo.css';

function Todo({ todo, toggleTodo, editTodo, deleteTodo, isEditing }) {
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, editText);
  };

  return (
    <li>
      <input type="checkbox" onClick={() => toggleTodo(todo.id)} checked={todo.completed} readOnly />
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} autoFocus />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        >
          {todo.text}
        </span>
      )}
      <div className="buttons">
        {!isEditing && (
          <button className="edit" onClick={() => editTodo(todo.id)}>
            Edit
          </button>
        )}
        <button className="delete" onClick={() => deleteTodo(todo.id)}>
          Del
        </button>
      </div>
    </li>
  );
}

export default Todo;
