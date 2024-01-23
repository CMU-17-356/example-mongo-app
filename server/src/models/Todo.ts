import mongoose from 'mongoose';
const { Model, Schema } = mongoose;

export const todoSchema = new Schema({ 
    title: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: false
    }
});

var Todo: typeof Model = mongoose.model('Todo', todoSchema);

export default Todo;