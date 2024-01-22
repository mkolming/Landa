import Cookies from 'js-cookie';
import { DataModel } from '../Hooks/types';

export const getCart = () => {
  const cart = Cookies.get('cart');
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product: DataModel, callback: () => void) => {
  const cart = getCart();
  cart.push({ ...product, qty: 1 });

  Cookies.set('cart', JSON.stringify(cart));
  callback(); // Chama a função callback para atualizar o estado do carrinho no componente
};

