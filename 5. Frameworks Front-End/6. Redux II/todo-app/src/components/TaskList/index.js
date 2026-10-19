import React from 'react';
import { ListContainer } from './styles';
import Task from "../Task";
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, toggleTask } from '../../state/tasks.slice';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const handleRemoveTask = (taskId) => {
        dispatch(removeTask(taskId));
    }
    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    }

    return (
        <ListContainer>
            {
                tasks.map(task => (
                    <Task 
                        key={task.id}
                        task={task.name}
                        completed={task.completed}
                        onRemove={() => handleRemoveTask(task.id)}
                        onToggle={() => handleToggleTask(task.id)}
                    />
                ))
            }
        </ListContainer>
    );
}; 

export default TaskList;