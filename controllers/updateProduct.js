const Product=require('../models/product');
exports.updatedProduct=async(req,res)=>{
    try{
        const{id}=req.params;
        const{name,description,price,category,reviews}=req.body;
        const product =await Product.findByIdAndUpdate({_id:id},{name,description,price,category,reviews});

        const updatedProduct=await Product.findById({_id:id});

        res.status(200).json({
            sucsess:true,
            data:updatedProduct,
            message:"Entry updated successfully"

        })
    }
    catch(error){
        res.status(500).json({
            sucsess:false,
            message:error.message

        })
    }
}