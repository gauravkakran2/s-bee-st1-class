const Product=require('../models/product');
exports.getProduct=async(req,res)=>{
    try{
        const products=await Product.find({});

        res.status(200).json({
            sucsess:true,
            data:products,
            message:"Data deleted successfully"

        })
    }
    catch(error){
        res.status(500).json({
            sucsess:false,
            message:error.message

        })
    }
}


exports.getProductById=async(req,res)=>{
    try{
        const{id}=req.params;
        const products=await Product.findById({_id:id});

        if(!products){
            return res.status(404).json({
                sucsess:false,
                message:"No data with given id"
            })
        }

        res.status(200).json({
            sucsess:true,
            data:products,
            message:"Data fetched with given id successfully"

        })
    }
    catch(error){
        res.status(500).json({
            sucsess:false,
            message:error.message

        })
    }
}

