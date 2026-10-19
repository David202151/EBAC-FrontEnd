import { RemoveButton, TaskContainer, TaskText } from './styles';

const Task = ({ task, onRemove, onToggle, completed }) => {
  return (
    <TaskContainer>
        <input
            type="checkbox"
            checked={completed}
            onChange={onToggle}
            aria-label={`Marcar "${task.title}" como completada`}
        />
        <TaskText $completed={completed}>{task.title}</TaskText>
        <RemoveButton type="button" onClick={onRemove}>Remove</RemoveButton>
    </TaskContainer>
  );
};

export default Task;