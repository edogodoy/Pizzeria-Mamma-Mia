import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { handleIncrement, handleDecrement, calculateTotal, cart } = useContext(CartContext);
  const [pizzas, setPizzas] = useState([]);

  // Función para obtener las pizzas desde la API
  const fetchPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  // Combinar los datos del carrito con los de la API
  const cartWithDetails = cart.map((item) => {
    const pizza = pizzas.find((pizza) => pizza.id === item.id);
    return pizza ? { ...pizza, count: item.count } : item;
  });

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>
      <div className="cart-items">
        {cartWithDetails.map((item) => (
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
