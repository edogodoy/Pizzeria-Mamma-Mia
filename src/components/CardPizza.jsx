import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';



const CardPizza = ({ id, img, name, ingredients, price }) => {
    const { handleIncrement } = useContext(CartContext);

    return (
        <div className="cardpizza">
            <img src={img} alt={`Pizza ${name}`} />
            <div className="cardpizza-content">
                <h3>{name}</h3>
                <div className="cardpizza-ing">
                    <p><strong>Ingredientes:</strong></p>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <p><strong>Precio:</strong> ${price}</p>
            </div>
            <div className="cardpizza-buttons">
                <Link to={`/pizza/${id}`} className="btn btn-secondary">
                    Ver Más <span role="img" aria-label="ver más">👀</span>
                </Link>
                <button className="btn btn-primary" onClick={() => handleIncrement(id)}>
                    Añadir <span role="img" aria-label="carrito">🛒</span>
                </button>
            </div>
        </div>
    );
};

export default CardPizza;

