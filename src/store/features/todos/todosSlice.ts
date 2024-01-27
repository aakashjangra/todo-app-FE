import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    add: (state, action) => {

      state.todos.push(
        {
          'id': action.payload.id, 
          'title': action.payload.title, 
          'status': 'active'
        }
      )

    }, 
    markCompleted: (state, action: {payload: {id: string}}) => {

      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: 'completed' }
          : todo 
      )

    },
    remove: (state, action: {payload: {id: string}}) => {

      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);

    },
    clearCompleted: (state) => {

      state.todos = state.todos.filter((todo) => todo.status === 'active')

    }
  }
}) 



export const { add, remove, markCompleted, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer