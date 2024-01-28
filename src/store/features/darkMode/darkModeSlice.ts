import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: 'theme',
  initialState: {
    dark: true
  },
  reducers: {
    toggle: (state) => {
      state.dark = !state.dark
      
      if(state.dark){
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}) 



export const { toggle } =
  darkModeSlice.actions;

export default darkModeSlice.reducer