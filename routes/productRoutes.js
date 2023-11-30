const express=require('express');
const router=express.Router();

const{createProduct}=require('../controllers/createProduct')
const{getProduct,getProductById}=require('../controllers/getProduct')
const{deleteProduct}=require('../controllers/deleteProduct')
const{updateProduct}=require('../controllers/updateProduct')

router.post("/createProduct",createProduct);
router.get("/getProduct",getProduct);
router.get("/getProduct/:id",getProductById);
router.delete("/deleteProduct/:id",deleteProduct);
router.put("/updateProduct/:id",updateProduct);

module.exports=router;