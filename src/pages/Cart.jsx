import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ApiContext } from "../context/ApiContext";
import { UserContext } from '../context/UserContext'; // Importa UserContext

const Cart = () => {
  const { handleIncrement, handleDecrement, calculateTotal, cart } = useContext(CartContext);
  const { pizzas } = useContext(ApiContext);
  const { token } = useContext(UserContext); // Obtiene el token del contexto

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
        <button className="btn-pay" disabled={!token}>Pagar</button> {/* Deshabilita el botón si token es false */}
      </div>
    </div>
  );
};

export default Cart;
