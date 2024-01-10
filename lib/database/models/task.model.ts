import { Schema, model, models } from "mongoose";


const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ""
    },

    byUser: {
        type: String, 
        ref: 'User'
    }
})


const Task = models.Task || model('Task', taskSchema);

export default Task;

