import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  input: {
    marginRight: theme.spacing(1),
  },
}));

function AddTask({ onAddTask }) {
  const classes = useStyles();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTaskTitle.trim() === '') {
      return;
    }

    onAddTask({
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    });

    setNewTaskTitle('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        label="Add a new task"
        variant="outlined"
        size="small"
        value={newTaskTitle}
        onChange={(event) => setNewTaskTitle(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

export default AddTask;
