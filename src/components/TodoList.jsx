import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';
import { LayoutList } from 'lucide-react';

const TodoList = () => {
  // Accessing the 'todo' array from the object
  const tasks = useSelector((state) => state.todos.todo);

  return (
    <div className="max-h-125 overflow-y-auto pr-2 custom-scrollbar">
      {tasks.length > 0 ? (
        tasks.map((task) => <TodoItem key={task.id} item={task} />)
      ) : (
        <div className="text-center py-10 text-gray-500">
          <LayoutList size={48} className="mx-auto mb-2 opacity-20" />
          <p className="italic">No tasks yet. Start by adding one above!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;