import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
  name: 'todos',
  initialState:{
  todo: [], // Aapka empty array
  status: 'idle' // Extra key for futuristic scaling (optional)
},
  reducers: {
    addTodo: (state, action) => {
      // Direct push because Redux Toolkit uses Immer library internally
      state.todo.push({ 
        id: crypto.randomUUID(), 
        text: action.payload, 
        completed: false 
      });
    },
    toggleTodo: (state, action) => {
      const item = state.todo.find(t => t.id === action.payload);
      if (item) item.completed = !item.completed;
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;