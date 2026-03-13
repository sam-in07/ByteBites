import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config.js"
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
//app config

const app = express();
const port =process.env.PORT || 4000;

//middleware
app.use(express.json()); //for parsing application/json
app.use(cors());//to allow cross-origin requests access from frontend

//db config

connectDB();



//api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads')); //to serve static files from uploads directory
//http://localhost:4000/images/1772271107946-food_5.png
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter)


app.get("/", (req, res) => {
    res.send("API is working!");
})

app.listen(port, () => {
    console.log(`Server is running on port  http://localhost:${port}`);
})


