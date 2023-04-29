import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function TodoList({ tasks, onDeleteTask  }) {
  const classes = useStyles();
  const [taskStatus, setTaskStatus] = useState(
    tasks.reduce((obj, task) => ({ ...obj, [task.id]: task.completed }), {})
  );

const handleTaskStatusChange = (event) => {
    const taskId = parseInt(event.target.value);
    setTaskStatus((prevState) => ({
      ...prevState,
      [taskId]: event.target.checked,
    }));
  };

  return (
    <List className={classes.root}>
      {tasks.map((task) => (
        <ListItem key={task.id} dense button>
          <Checkbox
            checked={taskStatus[task.id]}
            onChange={handleTaskStatusChange}
            value={task.id}
          />
          <ListItemText primary={task.title} />
          <ListItemSecondaryAction>
            <IconButton edge="end"
              aria-label="delete"
              onClick={() => onDeleteTask(task.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
