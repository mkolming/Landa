import Cookies from "js-cookie";
import { DataModel } from "../Hooks/types";

export const getCart = () => {
  const cart = Cookies.get("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product: DataModel, callback: () => void) => {
  const cart = getCart();
  const existingProduct = cart.find(
    (item: { id: number }) => item.id === product.id
  );

  if (!existingProduct) {
    cart.push({ ...product, qty: 1 });
  }

  Cookies.set("cart", JSON.stringify(cart));
  callback();
};

export const removeFromCart = (
  productId: number,
  callback: (newCartItems: DataModel[]) => void
) => {
  const cart = getCart();
  const newCartItems = cart.filter(
    (item: { id: number }) => item.id !== productId
  );
  Cookies.set("cart", JSON.stringify(newCartItems));
  callback(newCartItems);
};

export const getCartItems = () => {
  const cart = Cookies.get("cart");
  return cart ? JSON.parse(cart) : [];
};

export const getTotalPrice = (items: any[]) => {
  return items
    .reduce(
      (total: number, item: { price: number; qty: number }) =>
        total + item.price * item.qty,
      0
    )
    .toFixed(2);
};
