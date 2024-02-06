import Todo from '../models/Todo';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    await mongoose.disconnect();
    mongoServer.stop();
});

afterEach(async () => {
    await Todo.deleteMany({});
});

describe('Todo Model Tests', () => {
    it('should create a new todo', async () => {
        const todoData = {
            title: 'Test Todo',
            description: 'This is a test todo',
        };

        const todo = new Todo(todoData);
        await todo.save();

        const savedTodo = await Todo.findOne({ title: 'Test Todo' });

        expect(savedTodo).toBeDefined();
        expect(savedTodo!.title).toBe(todoData.title);
        expect(savedTodo!.description).toBe(todoData.description);
        expect(savedTodo!.completed).toBe(false);
        expect(savedTodo!.createdAt).toBeInstanceOf(Date);
    });
});
