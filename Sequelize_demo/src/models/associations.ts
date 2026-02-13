import User from "./user.model";
import Product from "./product.model";
import Cart from "./cart.model";
import CartItem from "./cartItem.model";

User.hasOne(Cart, {
  foreignKey: "userId",
  as: "cart"
});

Cart.belongsTo(User, {
  foreignKey: "userId",
  as: "user"
});

Cart.hasMany(CartItem, {
  foreignKey: "cartId",
  as: "items"
});

CartItem.belongsTo(Cart, {
  foreignKey: "cartId",
  as: "cart"
});

CartItem.belongsTo(Product, {
  foreignKey: "productId",
  as: "product"
});
