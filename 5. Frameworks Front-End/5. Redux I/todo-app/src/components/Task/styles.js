import react from 'react';
import { RemoveButton, TaskContainer, TaskText } from '.';

const Task = ({ task }) => {
  return (
    <TaskContainer>
      <TaskText>{task.text}</TaskText>
      <RemoveButton>Remove</RemoveButton>
    </TaskContainer>
  );
};

export default Task;