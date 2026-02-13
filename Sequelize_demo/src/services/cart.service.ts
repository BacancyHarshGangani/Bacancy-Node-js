import Cart from "../models/cart.model";
import CartItem from "../models/cartItem.model";

export const addItemToCart = async (
  userId: number,
  productId: number,
  quantity: number
) => {

  let cart = await Cart.findOne({ where: { userId } });

  if (!cart) {
    cart = await Cart.create({ userId });
  }

  let item = await CartItem.findOne({
    where: {
      cartId: cart.id,
      productId,
    },
  });

  if (item) {
    item.quantity += quantity;
    await item.save();
  } else {
    item = await CartItem.create({
      cartId: cart.id,
      productId,
      quantity,
    });
  }

  return item;
};


export const removeItemFromCart = async (
  userId: number,
  productId: number
) => {

  const cart = await Cart.findOne({ where: { userId } });

  if (!cart) {
    throw new Error("Cart not found");
  }

  const item = await CartItem.findOne({
    where: {
      cartId: cart.id,
      productId,
    },
  });

  if (!item) {
    throw new Error("Item not found in cart");
  }

  await item.destroy();

  return true;
};
