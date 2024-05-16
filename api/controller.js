const {getProducts,getSingleProduct,addToCart}=require('./services')
const colors=require("colors");

module.exports={
    products:(req,res)=>{
       
        getProducts((err,result)=>{
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            else{
                if (result){
                    res.json(result);
                }
                else {
                    res.send("no data available")
                }
            }
            
        })

    },
    singleProduct:(req,res)=>{
        const {_id}=req.params;
        getSingleProduct(_id,(err,result)=>{
            if (err) throw err;
            res.json(result)
        })
    },
    addProduct:(req,res)=>{

        const {product,quantity}=req.body;
         
        console.log("ppppppppp",product,quantity);
         
        addToCart(product,quantity,(err,result)=>{
            if (err) throw err;
            res.json({ message: result });
        })
    }
}