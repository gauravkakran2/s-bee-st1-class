const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desription:{
        type:String,
        
    },

    price:{
        type:Number,
        required:true
        

    },

    catogery:{
        type:String,
        required:true
    },
    reviews:{
        type:String,
        
    }

})


module.exports=mongoose.model("Product",ProductSchema);