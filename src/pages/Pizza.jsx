import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);

    const apiPizza = async () => {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        return response.json();
    };

    useEffect(() => {
        apiPizza().then(setPizza).catch(console.error);
    }, [id]);

    if (!pizza) return null;
    
    return (
        <div className="pizza-container">
            <h2>{pizza.name}</h2>
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <p><strong>Precio:</strong> ${pizza.price}</p>
            <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
            <p><strong>Descripción:</strong> {pizza.description}</p>
            <button>Añadir al carrito</button>
        </div>
    );
};

export default Pizza;
