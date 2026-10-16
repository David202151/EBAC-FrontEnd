import React from 'react';
import { ListContainer } from './styles';
import Task from "../Task";
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../../actions';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const handleRemoveTask = (taskId) => {
        dispatch(removeTask(taskId));
    }
    return (
        <ListContainer>
            {
                tasks.map(task => (
                    <Task 
                        key={task.id}
                        task={task.task}
                        onRemove={() => handleRemoveTask(task.id)}
                    />
                ))
            }
        </ListContainer>
    );
}; 

export default TaskList;