import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import TodoApp from './components1/TodoReact/TodoReact';
import TodoApp2 from './components2/TodoReact/TodoReact';
import Home from './components3/Home/Home.js';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'navbar-item active-link' : 'navbar-item')} // Conditionally apply active class
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ex1"
              className={({ isActive }) => (isActive ? 'navbar-item active-link' : 'navbar-item')} // Conditionally apply active class
            >
              Todo App
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ex2"
              className={({ isActive }) => (isActive ? 'navbar-item active-link' : 'navbar-item')} // Conditionally apply active class
            >
              Todo App 2
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex1" element={<TodoApp />} />
        <Route path="/ex2" element={<TodoApp2 />} />
      </Routes>
    </div>
  );
}

export default App;
