import Product from "../model/product.model.js"
import mongoose from 'mongoose'


export const getProduct = async(req, res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json({success:true, data:products})
    } catch (error) {
        console.error("cannot get the items")
        res.status(400).json({success:false, Error:"can not retrieve the items"})
    }
}


// export const createProduct = async(req,res)=>{

//     const product = req.body
//     if(!product.name||!product.price||!product.image){
//         res.status(400).json({success:false, Error:"all fields must be filled"})
//     }
//     const newProduct  = new Product(product)

//     try {
//         await newProduct.save()
//         res.status(201).json({success:true, data:newProduct})
//     } catch (error) {
//         console.error("error in creating the product:", error.message)
//         res.status(500).json({success:false, message:"internal error"})
//     }
// }

export const createProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body;

        if (!name || !price || !image) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const newProduct = new Product({ name, price, image });
        await newProduct.save();

        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in createProduct:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const updateProduct = async(req,res)=>{
    const {id } = req.params
    const product = req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"invalid product id"})
    }
    try {
    const updatedItem = await Product.findByIdAndUpdate(id, product, {new:true})
    res.status(200).json({success:true, data:updatedItem})
    } catch (error) {
        console.error("cannot update the item")
        res.status(500).json({success:false, error:"cannot be deleted"})
    }
}

export const deleteProduct = async(req, res)=>{
    const {id} = req.params
    console.log(id)

    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true, message:"the item successfully deleted"})
    } catch (error) {
        res.status(400).json({success:false, message:"the item is not found"})

    }
}
