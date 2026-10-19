import React, {useState} from 'react';
import { FormContainer, Input, Button } from './styles';
import { useDispatch } from 'react-redux';
import { addTask } from '../../state/tasks.slice';

const AddTaskForm = () => {
    const [formTask, setFormTask] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setFormTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formTask.trim() === '') return;
        const newTask = {
            id: Date.now(),
            title: formTask,
            completed: false
        }
        dispatch(addTask(newTask));
        setFormTask('');
    }
    return (
        <FormContainer onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    placeholder="Enter a new task"
                    aria-label="New task"
                    onChange={handleInputChange} 
                    value={formTask}
                />
                <Button type="submit">Add Task</Button>
        </FormContainer>
    );
}; 

export default AddTaskForm;