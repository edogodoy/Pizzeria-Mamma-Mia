const CardPizza = ({ img, name, ingredients, price }) => {
    return (
        <div className="cardpizza">
            <img src={img} alt={`Pizza ${name}`}/>

            <div className="cardpizza-content">
                <h3>{name}</h3>
                <p><strong>Ingredientes:</strong> {ingredients.join(', ')}</p>
                <p><strong>Precio:</strong> ${price}</p>
            </div>
            <div className="cardpizza-buttons">
                <button className="btn btn-secondary">
                    Ver Más <span role="img" aria-label="ver más">👀</span>
                </button>
                <button className="btn btn-primary">
                    Añadir <span role="img" aria-label="carrito">🛒</span>
                </button>
            </div>
        </div>
    );
};

export default CardPizza;
