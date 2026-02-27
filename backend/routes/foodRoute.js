import express from 'express';
import { addFood } from '../controllers/foodController.js';

import multer from 'multer';

const foodRouter = express.Router();

//Image Storage engine



foodRouter.post("/add", addFood);   











export default foodRouter;  