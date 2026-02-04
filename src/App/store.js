import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Ensure path is correct

export const store = configureStore({
  reducer: {
    // Is key 'todos' ki wajah se hi hum components mein 
    // state.todos.todo likh kar data nikaal paate hain
    todos: todoReducer,
  },
  // Middleware section (Future mein agar API calls karni hon toh yahan add honge)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Futuristic apps mein aksar complex data ke liye ise use karte hain
    }),
});

export default store;