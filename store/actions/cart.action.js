import { ADD_TO_CART } from '../types';
import { REMOVE_FROM_CART } from '../types';


export const addToCart = (product) => {
  return { type: ADD_TO_CART, product: product };
};

export const removeToCart = (productId) => {
  return { type: REMOVE_FROM_CART, pid: productId };
};
