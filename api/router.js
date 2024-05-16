const express=require('express');
const {products,singleProduct,addProduct}=require('./controller')
const router=express.Router();

router.get('/products',products)
router.get('/product/:_id',singleProduct)
router.post('/addProduct',addProduct)

module.exports=router
