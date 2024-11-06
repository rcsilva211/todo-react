import React from 'react';
import './TodoListFilter.css';

function TodoListFilter({ filter, setFilter, setSearchTerm }) {
  return (
    <div style={{ marginBottom: '5px' }}>
      <h4>Filtros</h4>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input type="text" placeholder="Pesquisar" className="search" onChange={(e) => setSearchTerm(e.target.value)} />
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
    </div>
  );
}

export default TodoListFilter;
