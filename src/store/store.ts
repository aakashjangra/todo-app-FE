import { EnhancedStore, ReducerType, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice";
import darkModeReducer from './features/darkMode/darkModeSlice';

const store: EnhancedStore = configureStore({
  reducer: {
    todos: todosReducer,
    darkMode: darkModeReducer,
  },
});

export default store