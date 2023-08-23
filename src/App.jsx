import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');
  let todos = [];

  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
    renderTodos();
  }

  function addTodo() {
    const task = todoInput.value;
    if (task) {
      todos.push(task);
      localStorage.setItem('todos', JSON.stringify(todos));
      renderTodos();
      todoInput.value = '';
    }
  }

  function removeTodo(button) {
    const todoItem = button.parentElement;
    const todoIndex = Array.from(todoList.children).indexOf(todoItem);
    todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
  }

  function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach((task) => {
      const todoItem = document.createElement('li');
      todoItem.className = 'todo-item';
      todoItem.innerHTML = `
        <input type="checkbox">
        <span>${task}</span>
        <button onclick="removeTodo(this)">Remove</button>
      `;
      todoList.appendChild(todoItem);
    });
}
  return (
    <>
       <div className="container">
    <h1>Awosome Todo List App</h1>
    <div className="todo-input">
      <input type="text" id="todoInput" placeholder="Enter a task" /> 
      <button onclick="addTodo()">Add</button >
    </div>
    <ul className="todo-list" id="todoList"></ul>
  </div>
    </>
  )
}

export default App
