import { Product } from "@/model/product";
import { connectDb } from "@/utils/database";




// export default async function  handler (req, res) {
const handler = async (req, res) => {


    await connectDb()

    const products = await Product.find({});

    res.status(200).json({ success: true, products });
}

export default handler;