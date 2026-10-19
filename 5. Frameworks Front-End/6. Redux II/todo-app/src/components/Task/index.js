import { RemoveButton, TaskContainer, TaskText } from './styles';

const Task = ({ task, onRemove, onToggle, completed }) => {
  return (
    <TaskContainer>
        <input type="checkbox" checked={completed} onChange={onToggle}/>
        <TaskText completed={completed}>{task}</TaskText>
        <RemoveButton onClick={onRemove}>Remove</RemoveButton>
    </TaskContainer>
  );
};

export default Task;