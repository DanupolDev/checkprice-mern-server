import Product from "../models/productSchema.js";
import { v4 as uuidv4 } from "uuid";

/**get all product */
export async function getProducts(req, res) {
  try {
    const p = await Product.find();
    res.json(p);
  } catch (error) {
    res.json({ error });
  }
}

/**insert product */
export async function inserProduct(req, res) {
  let slug = uuidv4();
  const { name, shop, price, quantity } = req.body;
  const ppq = price / quantity;

  /**ตรวจสอบความถูกต้องของข้อมูล */
  switch (true) {
    case !name:
      return res.status(400).json({ error: "กรุณาป้อนชื่อสินค้า" });
      break;
    case !shop:
      return res.status(400).json({ error: "กรุณาป้อนชื่อร้าน" });
      break;
    case !price:
      return res.status(400).json({ error: "กรุณาป้อนราคา" });
      break;
    case !quantity:
      return res.status(400).json({ error: "กรุณาป้อนจำนวน" });
      break;
  }

  /**บันทึกข้อมูล */
  Product.create({ name, shop, price, quantity, ppq, slug }, (err, product) => {
    if (err) {
      res.status(400).json({ error: "มีชื่อบทความซ้ำกัน" });
    }
    res.json(product);
  });
}

/**update product */
export async function updateProduct(req, res) {
  const { slug } = req.params;
  const { name, shop, price, quantity } = req.body;
  const ppq = price / quantity;
  Product.findOneAndUpdate(
    { slug },
    { name, shop, price, quantity, ppq },
    { new: true }
  ).exec((err, product) => {
    if (err) console.log(err);
    res.json("Succ");
  });
}

/**singleProduct */
export async function singleProduct(req, res) {
  const { slug } = req.params;
  Product.findOne({ slug }).exec((err, product) => {
    res.json(product);
  });
}
