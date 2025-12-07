import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(['Buy milk', 'Do homework', 'Learn react']);
  const [newTask, setNewTask] = useState('');
  function handleAddTask() {
  if (newTask.trim() !== '') {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }
}
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <input
        type = "text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"

      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
      ))}
      </ul>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default App;