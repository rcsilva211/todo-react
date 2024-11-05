import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
