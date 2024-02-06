import request from 'supertest';
import express from 'express';
import todoRouter from '../routes/Todos';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let app: express.Application;
let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);

    app = express();
    app.use(express.json());
    app.use('/todos', todoRouter);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Todo Routes Tests', () => {
    it('should get all todos', async () => {
        const response = await request(app).get('/todos');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });

    it('should create a new todo', async () => {
        const todoData = {
            title: 'Test Todo',
            description: 'This is a test todo',
        };
        const response = await request(app).post('/todos').send(todoData);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe(todoData.title);
        expect(response.body.description).toBe(todoData.description);
        expect(response.body.completed).toBe(false);
        expect(response.body.createdAt).toBeDefined();
    });

    it('should get a todo by id', async () => {
        const todoData = {
            title: 'Test Todo',
            description: 'This is a test todo',
        };
        const response = await request(app).post('/todos').send(todoData);
        const todoId = response.body._id;

        const getResponse = await request(app).get(`/todos/${todoId}`);
        expect(getResponse.status).toBe(200);
        expect(getResponse.body.title).toBe(todoData.title);
        expect(getResponse.body.description).toBe(todoData.description);
        expect(getResponse.body.completed).toBe(false);
        expect(getResponse.body.createdAt).toBeDefined();
    });

    it('should update a todo by id', async () => {
        const todoData = {
            title: 'Test Todo',
            description: 'This is a test todo',
        };
        const response = await request(app).post('/todos').send(todoData);
        const todoId = response.body._id;

        const updateResponse = await request(app).patch(`/todos/${todoId}`).send({ completed: true });
        expect(updateResponse.status).toBe(200);
        expect(updateResponse.body.modifiedCount).toBe(1);
    });

    it('should delete a todo by id', async () => {
        const todoData = {
            title: 'Test Todo',
            description: 'This is a test todo',
        };
        const response = await request(app).post('/todos').send(todoData);
        const todoId = response.body._id;

        const deleteResponse = await request(app).delete(`/todos/${todoId}`);
        expect(deleteResponse.status).toBe(200);
        expect(deleteResponse.body.deletedCount).toBe(1);
    });

    it('should return 404 for non-existent todo', async () => {
        const response = await request(app).get('/todos/123');
        expect(response.status).toBe(404);
    });

    it('should return 404 for non-existent todo', async () => {
        const response = await request(app).patch('/todos/123').send({ completed: true });
        expect(response.status).toBe(404);
    });

    it('should return 404 for non-existent todo', async () => {
        const response = await request(app).delete('/todos/123');
        expect(response.status).toBe(404);
    });
});
