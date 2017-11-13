import mongoose, { Schema } from 'mongoose';

/**
 * Todo Scheme
 */
var todoSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    created_at: { 
        type: Date, default: Date.now 
    },
});

/**
 * Init mongoose model
 */
export default mongoose.model('todo', todoSchema);