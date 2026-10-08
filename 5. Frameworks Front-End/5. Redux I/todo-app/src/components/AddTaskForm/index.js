import React from 'react';
import { FormContainer, Input, Button } from './styles';

const AddTaskForm = () => {
    return (
        <FormContainer>
            <form>
                <Input type="text" placeholder="Enter a new task" />
                <Button type="submit">Add Task</Button>
            </form>
        </FormContainer>
    );
}; 

export default AddTaskForm;