import { createContext, useState, useContext } from "react";
import { ApiContext } from "./ApiContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { pizzas } = useContext(ApiContext);
  const [cart, setCart] = useState([]);

  const handleIncrement = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        const newItem = pizzas.find((pizza) => pizza.id === id);
        if (newItem) {
          return [...prevCart, { ...newItem, count: 1 }];
        }
      }
      return prevCart;
    });
  };

  const handleDecrement = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      return updatedCart.filter((item) => item.count > 0);
    });
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  const stateGlobal = {
    cart,
    handleIncrement,
    handleDecrement,
    calculateTotal
  };

  return (
    <CartContext.Provider value={stateGlobal}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
