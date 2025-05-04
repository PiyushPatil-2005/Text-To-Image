import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

import connectDB from './config/mongodb.js'

const PORT = process.env.PORT || 4000;  // Use PORT from env or fallback to 8080
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.get('/', (req, res) => {
    res.send("API Working Fine");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})