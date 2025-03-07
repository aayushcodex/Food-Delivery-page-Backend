import foodModel from "../models/foodModel.js";
import  fs  from "fs";

// add food item

const addFood = async (req, res) => {


    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name:req.body.name,
        description: res.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await food.save();
        res.json({succes:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        req.json({success:false,message:"Error"})
    }
}

export {addFood}