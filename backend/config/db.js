import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sanjeevreddy:sanju@cluster0.mumk7sl.mongodb.net/food-del').then(()=>console.log("DB connected"));
}

