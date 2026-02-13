import { Router } from "express";
import * as cartController from "../controllers/cart.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/add", authenticate, cartController.addToCart);

router.delete(
  "/remove/:productId",
  authenticate,
  cartController.removeFromCart
);

export default router;
