import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: action.payload.id,
        title: action.payload.title,
        status: action.payload.status,
      });
    },
    updateTodo: (state, action) => {
      const { id, value } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, title: value } : todo,
      );

      console.log('handle update inside - ', id, value);
    },
    markCompleted: (state, action: { payload: { id: string } }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, status: 'completed' } : todo,
      );
    },
    remove: (state, action: { payload: { id: string } }) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => todo.status === 'active');
    },
    reorderTodos: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const reorderedTodos = Array.from(state.todos);
      const [removed] = reorderedTodos.splice(startIndex, 1);
      reorderedTodos.splice(endIndex, 0, removed);
      state.todos = reorderedTodos;
    },
  },
});

export const {
  add,
  remove,
  markCompleted,
  clearCompleted,
  reorderTodos,
  updateTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
