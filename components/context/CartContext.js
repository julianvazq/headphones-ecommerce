import React, { useState, useEffect, createContext } from 'react';
import Cookies from 'js-cookie';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const cartCookie = Cookies.get('cart');
    if (cartCookie) {
      return JSON.parse(cartCookie);
    }
    return [];
  });

  const addToCart = (product) => {
    const newCart = [...cart, product];
    return newCart;
  };

  const deleteFromCart = ({ model }) => {
    const oldCart = [...cart];
    const newCart = oldCart.filter(
      (productInCart) => productInCart.model !== model
    );
    return newCart;
  };

  const saveCartCookie = (newCart) => {
    Cookies.set('cart', JSON.stringify(newCart));
  };

  const checkIfInCart = (product) => {
    const found = cart.find(
      (productInCart) => productInCart.model === product.model
    );

    return found ? true : false;
  };

  const handleCartChange = (product) => {
    // Checks if product is in cart
    const found = checkIfInCart(product);

    let newCart = [];

    if (found) {
      newCart = deleteFromCart(product);
    } else {
      newCart = addToCart(product);
    }

    setCart(newCart);
  };

  // When cart changes, save new cart in cookie
  useEffect(() => {
    saveCartCookie(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, handleCartChange, checkIfInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
