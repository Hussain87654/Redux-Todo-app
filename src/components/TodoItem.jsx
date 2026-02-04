import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todo/todoSlice';
import { Checkbox, IconButton, Tooltip } from '@mui/material';
import { Trash2, CheckCircle, Circle, ArrowRight } from 'lucide-react';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={`flex items-center justify-between p-4 mb-3 rounded-2xl transition-all duration-300 border border-white/30 
      ${item.completed ? 'bg-white/20 opacity-60' : 'bg-white/50 backdrop-blur-md hover:shadow-xl hover:-translate-y-1'}`}>
      
      <div className="flex items-center gap-4">
        <Checkbox
          icon={<Circle className="text-indigo-400" />}
          checkedIcon={<CheckCircle className="text-emerald-500" />}
          checked={item.completed}
          onChange={() => dispatch(toggleTodo(item.id))}
        />
        <span className={`text-lg font-medium ${item.completed ? 'line-through' : 'text-gray-800'}`}>
          {item.text}
        </span>
      </div>

      <Tooltip title="Abort Mission">
        <IconButton 
          onClick={() => dispatch(deleteTodo(item.id))}
          className="text-rose-500 hover:bg-rose-50"
        >
          <Trash2 size={20} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TodoItem;