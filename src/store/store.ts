import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice";
import darkModeReducer from './features/darkMode/darkModeSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
    darkMode: darkModeReducer,
  },
});