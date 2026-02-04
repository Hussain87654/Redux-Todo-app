import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { TextField, Button, InputAdornment } from '@mui/material';
import { PlusCircle, Send } from 'lucide-react';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="flex gap-2 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <TextField
        fullWidth
        placeholder="Enter a new mission..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
          }
        }}
      />
      <Button 
        variant="contained" 
        onClick={handleAdd}
        className="bg-linear-to-r from-violet-600 to-indigo-600 rounded-3xl px-6 shadow-lg hover:scale-105 transition-transform"
      >
        <PlusCircle className="mr-2" size={45} /> Add
      </Button>
    </div>
  );
};

export default TodoInput;