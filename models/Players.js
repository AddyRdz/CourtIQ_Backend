import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 20
    }, 
    team: {
        type: String,
        minLength: 5,
        maxLength: 20
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        minLength: 5,
        maxLength: 50
    }

}) 

export default new mongoose.model('Player', playerSchema);