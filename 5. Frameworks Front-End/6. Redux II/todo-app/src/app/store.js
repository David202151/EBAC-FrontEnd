import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../state/tasks.slice";

const store = configureStore({
  reducer: {
    tasks : tasksReducer
  },
});

export default store;