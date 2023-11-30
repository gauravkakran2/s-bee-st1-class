const express=require('express');
const router=express.Router();

const{createProductReview}=require('../controllers/createProductReview')
const{getProductReview,getProductReviewById}=require('../controllers/getProductReview')
const{deleteProductReview}=require('../controllers/deleteProductReview')
const{updateProductReview}=require('../controllers/updateProductReview')

router.post("/createProductReview",createProductReview);
router.get("/getProductReview",getProductReview);
router.get("/getProduct/:id",getProductReviewById);
router.delete("/deleteProductReview/:id",deleteProductReview);
router.put("/updateProductReview/:id",updateProductReview);

module.exports=router;