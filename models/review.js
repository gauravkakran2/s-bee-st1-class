const mongoose=require('mongoose');
const ReviewSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
        
    },

    author:{
        type:Number,
        required:true
        

    },

    createdAt:{
        type:String
    }

})


module.exports=mongoose.model("Review",ReviewSchema);