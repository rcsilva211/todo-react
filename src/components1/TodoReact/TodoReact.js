import React, { useState, useEffect } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoListFilter from '../TodoListFilter/TodoListFilter';
import Todo from '../Todo/Todo';
import './TodoReact.css';

const TodoReact = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  console.log(filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, text) => {
    if (text !== undefined) {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
      setIsEditing(null);
    } else {
      setIsEditing(id);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      (filter === 'completed' && todo.completed) || (filter === 'incomplete' && !todo.completed) || filter === 'all';

    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoListFilter filter={filter} setFilter={setFilter} setSearchTerm={setSearchTerm} />
      <div style={{ overflowY: 'auto', maxHeight: '250px' }}>
        <ul>
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              isEditing={isEditing === todo.id}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoReact;
