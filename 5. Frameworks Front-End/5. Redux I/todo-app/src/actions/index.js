export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: {
            id: Date.now(),
            task,
            completed: false
        }
    };
}

export const removeTask = (taskId) => {
    return {
        type: 'REMOVE_TASK',
        payload: taskId
    };
}