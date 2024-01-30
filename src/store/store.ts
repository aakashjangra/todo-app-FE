import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice";
import darkModeReducer from './features/darkMode/darkModeSlice';
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistTodoConfig = {
  key: 'todos',
  storage
}

const persistDarkModeConfig = {
  key: 'darkMode',
  storage,
};

const persistedTodoReducer = persistReducer(persistTodoConfig, todosReducer);
const persistedDarkModeReducer = persistReducer(persistDarkModeConfig, darkModeReducer)

export const store: EnhancedStore = configureStore({
  reducer: {
    todos: persistedTodoReducer,
    darkMode: persistedDarkModeReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);