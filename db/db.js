const mongoose=require('mongoose');

const db=async()=>{
    try{
        const connection= await mongoose.connect(process.env.uri)
    }catch(err){
        console.log(err)
    }
}

module.exports=db;