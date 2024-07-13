import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb://localhost:27017", {
            dbName: "NextJSPrac",
        });
        console.log(`Database connected on ${connection.host}`);
    } catch (error) {
        console.log(`Error`);
    }
}