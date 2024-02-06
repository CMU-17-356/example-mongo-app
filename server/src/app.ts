require("dotenv").config();
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import todoRoutes from './routes/Todos'

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/todos', todoRoutes);

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    console.error('MONGODB_URI is not set. Please set it and retry.');
    process.exit(1);
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
