const Product=require('../models/product');
exports.deleteProduct=async(req,res)=>{
    try{
        const{id}=req.params;
        const product=await Product.findByIdAndDelete({_id:id});
        if(!product){
            res.status(404).json({
                sucsess:false,
                message:"Data not present"
            })
        }
        res.status(200).json({
            sucsess:true,
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