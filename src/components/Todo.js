import React, { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleCheckboxChange = (task, isChecked) => {
    if (isChecked) {
      setTodo(todo.filter(item => item !== task));
      setCompletedTodo([...completedTodo, task]);
    } else {
      setCompletedTodo(completedTodo.filter(item => item !== task));
      setTodo([...todo, task]);
    }
  };

  const addNewTodo = () => {
    if (newTodo.trim()) {
      setTodo([...todo, newTodo]);
      setNewTodo("");
      setShowInput(false); // Hide the input box after adding the todo
    }
  };

  const clearCompletedTodos = () => {
    setCompletedTodo([]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ width: '600px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setShowInput(true)}>Add new todo</button>
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={clearCompletedTodos}>Clear Completed Todos</button>
        </div>
        {showInput && (
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="text"
              style={{ flex: 1, padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter new todo"
            />
            <button style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={addNewTodo}>Add</button>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '24px', marginBottom: '10px' }}>To-Do List</h1>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {todo.map((task, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
                  <input
                    type="checkbox"
                    id={`task${index}`}
                    style={{ marginRight: '10px' }}
                    onChange={(e) => handleCheckboxChange(task, e.target.checked)}
                    checked={false}
                  />
                  <label htmlFor={`task${index}`} style={{ fontSize: '18px', color: '#333' }}>{task}</label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 style={{ fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '24px', marginBottom: '10px' }}>Completed To-Do List</h1>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {completedTodo.map((task, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc', opacity: '0.6' }}>
                  <label style={{ fontSize: '18px', color: '#333', textDecoration: 'line-through' }}>{task}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
