import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';

//app config

const app = express();
const port = 4000;

//middleware
app.use(express.json()); //for parsing application/json
app.use(cors());//to allow cross-origin requests access from frontend

//db config

connectDB();



//api endpoints
app.get("/", (req, res) => {
    res.send("API is working!");
})

app.listen(port, () => {
    console.log(`Server is running on port  http://localhost:${port}`);
})


