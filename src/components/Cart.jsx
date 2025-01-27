import React, { useState } from "react";
import { pizzaCart } from "../pizzas"; // Importa los datos del carrito

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart); // Estado para el carrito

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

      // Filtra los artículos con count <= 0
      return updatedCart.filter(item => item.count > 0);
    });
  };

  // Calcula el total
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>${item.price.toLocaleString("es-CL")}</p>
            </div>
            <div className="cart-item-quantity">
              <button className="btn-decrement" onClick={() => handleDecrement(item.id)}>-</button>
              <span>{item.count}</span>
              <button className="btn-increment" onClick={() => handleIncrement(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toLocaleString("es-CL")}</h3>
        <button className="btn-pay">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
