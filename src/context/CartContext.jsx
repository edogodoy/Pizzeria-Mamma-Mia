import { createContext, useState } from "react";
import { pizzaCart } from "../pizzas";

// 1. Crear el contexto
export const CartContext = createContext();

// 2. Proveedor del contexto
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);

  // Maneja el incremento de la cantidad
  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Maneja el decremento de la cantidad
  const handleDecrement = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      return updatedCart.filter(item => item.count > 0);
    });
  };

  // Calcula el total
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
