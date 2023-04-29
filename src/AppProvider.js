import React from 'react';
import { AppContext } from './AppContext';


export const AppProvider = (props) => {
  const [state, setState] = React.useState({
    tasks: [],
  });

  const addTask = (task) => {
    setState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, task],
    }));
  };

  const updateTask = (taskId, updatedTask) => {
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? updatedTask : task
      ),
    }));
  };

  const toggleTask = (taskId) => {
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  const deleteTask = (taskId) => {
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  const value = {
    tasks: state.tasks,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
  };

  return <AppContext.Provider value={value} {...props} />;
};


export default AppProvider;
