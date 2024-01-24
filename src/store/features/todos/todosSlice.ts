import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    add: (state, action) => {
      state.todos.push({'id': action.payload.id, 'title': action.payload.title})
    }, 
    remove: (state, action: {payload: {id: string}}) => {
      // const updatedArr = [...state.todos]
      const removeMatching = (value, index, arr) => {
        if(value.id === action.payload.id) {
          arr.splice(index, 1);
          return true;
        }
        return false;
      }

      state.todos.filter(removeMatching);

    }
  }
}) 



export const {add, remove} = todosSlice.actions;

export default todosSlice.reducer