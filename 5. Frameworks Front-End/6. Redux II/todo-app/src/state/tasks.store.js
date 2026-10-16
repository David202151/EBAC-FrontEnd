const { createSlice } = require("@reduxjs/toolkit");

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
});


export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;