import mongoose from "mongoose";
const { Schema } = mongoose;

/**product model */
const productModel = new Schema({
  name: { type: String, require: true },
  shop: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
  ppq: { type: Number, require: true },
  slug: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Product", productModel);
