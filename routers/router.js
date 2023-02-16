import { Router } from "express";
const router = Router();

/**import controllers */
import * as controller from "../controllers/controller.js";

/** Product Routes API */

router
  .route("/products")
  .get(controller.getProducts) /**Get Request */
  .post(controller.inserProduct);

router.put("/product/:slug", controller.updateProduct);
router.get("/product/:slug", controller.singleProduct);
export default router;
