import React, { useEffect } from 'react';
import { ListContainer } from './styles';
import Task from "../Task";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, removeTask, toggleTask } from '../../state/tasks.slice';
import { FAILED, IDLE, LOADING, SUCCEEDED } from '../../state/status';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const status = useSelector(state => state.tasks.status); 
    useEffect(() => {
        status === IDLE && dispatch(fetchTasks()); 
    }, [dispatch, status]); 


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
                        task={task}
                        completed={task.completed}
                        onRemove={() => handleRemoveTask(task.id)}
                        onToggle={() => handleToggleTask(task.id)}
                    />
                ))
            }
            {
                status === LOADING && <p>Cargando tareas ....</p>
            }
            {
                status === FAILED && <p>Ha ocurrido un error </p>
            }
            {
                status === SUCCEEDED && tasks.length === 0 && <p>No hay tareas</p>
            }
        </ListContainer>
    );
}; 

export default TaskList;