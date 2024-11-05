import React from 'react';

function TodoListFilter({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
        Todas
      </button>
      <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>
        Completas
      </button>
      <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active' : ''}>
        Incompletas
      </button>
    </div>
  );
}

export default TodoListFilter;
