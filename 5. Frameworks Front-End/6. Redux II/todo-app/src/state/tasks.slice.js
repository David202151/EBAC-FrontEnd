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
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        }
    }
});


export const { addTask, removeTask, toggleTask } = taskSlice.actions;
const { reducer: tasksReducer } = taskSlice;
export default tasksReducer;