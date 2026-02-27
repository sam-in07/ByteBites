import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food itesm

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({
      success: true,
      message: "Food item added successfully",
    });
  } catch (error) {
    console.error("Error adding food item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add food item",
    });
  }
};

export { addFood };
