import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import {v4 as uuidv4} from "uuid";

const TodoList = () => {

    const [todos, setTodos] = useState<{id: string, title: string, description: string, completed: boolean}[]>([])

    const createTodo = (title: string, description: string, completed: boolean) => {
        setTodos([...todos, {id: uuidv4(), title, description, completed}])
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const updateTodo = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    return (
        <div className="container mx-auto my-20 p-8 bg-primary">
            <h3 className="text-3xl font-primary text-white mb-4">Todo List</h3>
            <Form createTodo={createTodo} />
            <div className="border-t border-white my-4"></div>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}
        </div>
    );
}

export default TodoList;
