import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ByteBites:ByteBites987654@cluster0.gjxcrm4.mongodb.net/food-app').then(()=>console.log("DB Connected yeeaa !"));
}