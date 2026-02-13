import { Request, Response } from "express";
import * as cartService from "../services/cart.service";

export const addToCart = async (req: any, res: Response) => {
  try {

    const { productId, quantity } = req.body;
    const userId = req.user.id;

    const item = await cartService.addItemToCart(
      userId,
      productId,
      quantity
    );

    return res.status(200).json({
      success: true,
      data: item,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error adding to cart",
    });
  }
};

export const removeFromCart = async (req: any, res: Response) => {
  try {

    const productId = Number(req.params.productId);
    const userId = req.user.id;

    await cartService.removeItemFromCart(
      userId,
      productId
    );

    return res.status(200).json({
      success: true,
      message: "Item removed from cart",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error removing item",
    });
  }
};
