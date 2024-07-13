import { Product } from "@/model/product";
import { connectDb } from "@/utils/database"


export default async (req, res) => {

    if (req.method !== "POST") {
        res.status(404).json({
            success: false,
            message: `No API with ${req.method} Method`,
        });
    } else {

        await connectDb();

        const { price, name, category } = req.body;

        await Product.create({
            name,
            price,
            category,
        });

        res.status(201).json({
            success: true,
            message: "Product Created SuccessFully"
        })
    }

}