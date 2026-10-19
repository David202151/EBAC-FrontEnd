import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./status";

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data.slice(0, 10);
    },
    {
        // Evita pedir las tareas dos veces (por ejemplo, con StrictMode en desarrollo)
        condition: (_, { getState }) => getState().tasks.status === IDLE
    }
);

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        status: IDLE,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = LOADING;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                // Conserva las tareas agregadas mientras se cargaba la API
                state.tasks = [...action.payload, ...state.tasks];
                state.status = SUCCEEDED;
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.status = FAILED;
            })
    }
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
const { reducer: tasksReducer } = taskSlice;
export default tasksReducer;
