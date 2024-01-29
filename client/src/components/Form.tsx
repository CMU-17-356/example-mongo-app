import React, { useState } from 'react';

type FormProps = {
    createTodo: (title: string, description: string, completed: boolean) => void;
};

const Form: React.FC<FormProps> = ({ createTodo }) => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [completed] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTodo(title, description, completed)
        setTitle("")
        setDescription("")
    }

    return (
        <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
            <input
                className="w-full p-2 mb-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-400"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <input
                className="w-full p-2 mb-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-400"
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button
                className="w-full p-2 text-white bg-primary rounded-md hover:bg-pink-500"
                type="submit"
            >
                Add Task
            </button>
        </form>
    );
}

export default Form;