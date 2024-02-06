import express, { Request, Response } from 'express';
import Todo from '../models/Todo';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.get('/:todoId', async (req: Request, res: Response) => {
    try {
        const todo = await Todo.findById(req.params.todoId);
        res.json(todo);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.post('/', async (req: Request, res: Response) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedTodo = await todo.save();
        res.json(savedTodo);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.patch('/:todoId', async (req: Request, res: Response) => {
    try {
        const updatedTodo = await Todo.updateOne(
            { _id: req.params.todoId },
            { $set: { completed: req.body.completed } }
        );
        res.json(updatedTodo);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.delete('/:todoId', async (req: Request, res: Response) => {
    try {
        const removedTodo = await Todo.deleteOne({ _id: req.params.todoId });
        res.json(removedTodo);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

export default router;