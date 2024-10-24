import mongoose, { mongo } from "mongoose";

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        maxLength: 20,
    },
    location: {
        type: String,
        minLength: 2,
        maxLength: 20,
    },
    championships: {
        type: Number,
    }, 
    comment: {
        type: String,
        minLength: 5,
        maxLength: 50
    }
})

export default new mongoose.model('Team', teamSchema);