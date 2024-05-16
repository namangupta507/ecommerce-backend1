const mongoose=require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true},
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);

module.exports={Item};