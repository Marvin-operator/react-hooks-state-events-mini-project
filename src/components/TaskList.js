import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onTaskDelete(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
