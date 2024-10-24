import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// connect to the database
mongoose.connect(process.env.MONGODB_URI)

const app = express();
const PORT = 4000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('HOME')
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    
});