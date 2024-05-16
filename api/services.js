// const products=require("../data/products")
const {Product}=require('../db/ProductModel');
const {Item}=require("../db/ItemModel");

module.exports={
    getProducts:async(callback)=>{
    
        try {
           const data=await Product.find();
           console.log(data,"data")
            callback(null, data);
        } catch (err) {
           console.log(err,"error")
            callback(err);
        }
    },
    getSingleProduct:async(_id,callback)=>{
       
        try{
            const product=await Product.findById(_id)
            callback(null,product);
        }
        catch(err){
            callback(err)
        }
    },
    addToCart:async(product,quantity,callback)=>{
       try {
            delete product._id;
            product.quantity = quantity;
            const newproduct=new Item(product);
            console.log(newproduct)
            await newproduct.save();
            callback("","added successfully")
       }catch(err){
        callback(err);
       }
    }
}
