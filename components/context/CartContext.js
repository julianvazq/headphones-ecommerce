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

  const getCartTotal = () => {
    if (!cart.length) return 0;

    const INITIAL_VALUE = 0;

    const total = cart.reduce(
      (accumulator, currValue) =>
        accumulator + currValue.price * currValue.quantity,
      INITIAL_VALUE
    );
    return total.toFixed(2);
  };

  const updateProduct = (product) => {
    const found = cart.find(
      (productInCart) => productInCart.model === product.model
    );

    if (!found) {
      return;
    }

    const newCart = cart.map((productInCart) => {
      if (productInCart.model === product.model) {
        return product;
      }
      return productInCart;
    });

    setCart(newCart);
  };

  const checkQuantity = (product) => {
    if (product.quantity) {
      return product;
    }

    return { ...product, quantity: 1 };
  };

  const addToCart = (product) => {
    const checkedProduct = checkQuantity(product);
    const newCart = [...cart, checkedProduct];
    return newCart;
  };

  const deleteFromCart = ({ model }) => {
    const oldCart = [...cart];
    const newCart = oldCart.filter(
      (productInCart) => productInCart.model !== model
    );
    return newCart;
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

  const saveCartCookie = (newCart) => {
    Cookies.set('cart', JSON.stringify(newCart), { sameSite: 'lax' });
  };

  // When cart changes, save new cart in cookie
  useEffect(() => {
    saveCartCookie(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleCartChange,
        checkIfInCart,
        updateProduct,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
