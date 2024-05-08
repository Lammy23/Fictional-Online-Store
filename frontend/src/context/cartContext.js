import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext)
};

export const CartProvider = ({ children }) => {
  // State variables:
  // List of cart products
  //      - No of items
  //      -
  // Methods:
  // Add to cart
  // Remove from cart

  const [cartProducts, setCartProducts] = useState();

  const addToCart = () => {};

  const removeFromCart = () => {};

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
