const Product = require('../models/product');
exports.createProduct=async(req,res)=>{
    try{
        const{name,description,price,category,reviews}=req.body;
        const product=await Product.create({name,description,price,category,reviews});

        res.status(200).json({
            sucsess:true,
            data:product,
            message:"Entry created successfully"

        })
    }
    catch(error){
        res.status(500).json({
            sucsess:false,
            data:"Internal server error",
            message:error.message

        })
    }
}