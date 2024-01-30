import { BsTrashFill } from 'react-icons/bs';

type TodoProps = {
    todo: {
        _id: string;
        title: string;
        description: string;
        completed: boolean;
        createdAt: Date;
    }
    deleteTodo: (id: string) => void;
    updateTodo: (id: string) => void;
    titleClick: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo, updateTodo, titleClick }) => {
    return (
        <div className="flex items-center space-x-4 bg-primary text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
            <div className="flex items-center space-x-4 flex-grow">
                <button className="flex items-center p-2" onClick={() => titleClick(todo._id)}>{todo.title}</button>
                <p className="font-primary">{todo.description}</p>
            </div>
            <button
                className="flex items-center p-2"
                onClick={() => updateTodo(todo._id)}
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
                <BsTrashFill className="text-xl" onClick={() => deleteTodo(todo._id)} />
            </div>
        </div>
    );
}

export default Todo;