import { BsTrashFill } from 'react-icons/bs';

type TodoProps = {
    todo: {
        id: string;
        title: string;
        description: string;
        completed: boolean;
    }
    deleteTodo: (id: string) => void;
    updateTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo, updateTodo }) => {
    return (
        <div className="flex items-center space-x-4 bg-primary text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
      <div className="flex items-center space-x-4 flex-grow">
        <p className="font-primary">{todo.title}</p>
        <p className="font-primary">{todo.description}</p>
      </div>
      <button
        className="flex items-center p-2"
        onClick={() => updateTodo(todo.id)}
      >
        {todo.completed ? (
          <p className="font-primary bg-green-700 px-4 py-2 rounded-md">
            Completed
          </p>
        ) : (
          <p className="font-primary bg-red-700 px-4 py-2 rounded-md">
            Not Completed
          </p>
        )}
      </button>
      <div className="flex items-center">
        <BsTrashFill className="text-xl" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
      );
}

export default Todo;