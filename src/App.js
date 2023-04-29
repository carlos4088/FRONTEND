import React from 'react';
import TodoList from './components/TodoList';

import { AppContext } from './AppContext';


export default function App() {
  const { tasks, addTask, updateTask, toggleTask, deleteTask } = React.useContext(AppContext);
  const [newTask, setNewTask] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      addTask({
        id: Date.now(),
        title: newTask,
        completed: false,
      });
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <TodoList tasks={tasks} updateTask={updateTask} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

