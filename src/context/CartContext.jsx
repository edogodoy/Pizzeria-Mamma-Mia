import { createContext, useState } from "react";
import { pizzaCart } from "../pizzas";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrement = (id) => {
    setCart(prevCart => {
      // Buscar si el item ya existe en el carrito
      const existingItem = prevCart.find(item => item.id === id);
      
      if (existingItem) {
        // Si existe, incrementar su contador
        return prevCart.map(item =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // Si no existe, agregar el nuevo item
        const newItem = pizzaCart.find(item => item.id === id);
        if (newItem) {
          return [...prevCart, { ...newItem, count: 1 }];
        }
        return prevCart;
      }
    });
  };

  const handleDecrement = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      return updatedCart.filter(item => item.count > 0);
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