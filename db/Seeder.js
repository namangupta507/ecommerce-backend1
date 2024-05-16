const mongoose=require('mongoose');
require('dotenv').config();
const colors=require('colors');
const users=require('../data/users');
const products=require('../data/products');
const User=require('../db/UserModel');
const Product=require('../db/ProductModel');
const Order=require('../db/OrderModel');
const db=require("../db/db")

db();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        
        console.log(createdUsers[0]);

        const adminUser = createdUsers[0]._id;

        console.log(adminUser,"//////")

        const sampleProducts = products.map((product) => {
           
            return { ...product, user: adminUser};
        });
        console.log("Sample Products:", sampleProducts);

        await Product.insertMany(sampleProducts);

        console.log(sampleProducts)

        console.log('Data imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData=async()=>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data imported!'.green.inverse);
        process.exit();
    }catch(error){
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}


console.log(process.argv)
if(process.argv[2]==='-d'){
    destroyData();
}
else{
    importData();
    console.log("imported data")
}