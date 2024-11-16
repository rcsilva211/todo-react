import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  function sendNotification() {
    Notification.requestPermission().then(() => {
      const notification = new Notification('Hello World!', {
        body: 'This is a notification',
        icon: 'https://irp.cdn-website.com/a255122d/dms3rep/multi/GettyImages-1140349002.jpg',
      });
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Adicionar</button>
      <button id="btn" onClick={sendNotification}>
        Send notifications
      </button>
    </form>
  );
}

export default TodoForm;
