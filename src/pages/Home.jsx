import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";


const Home = () => {
    const [pizzas, setPizzas] = useState([]);

        const apiPizza = async () => {
            const response = await fetch("http://localhost:5000/api/pizzas");
            return response.json();
        };
    
    
        useEffect(() => {
            apiPizza().then(setPizzas).catch(console.error);
        }, []);
    
    
        if (!pizzas) return null;


    return (
        <div className="home">
            <Header />
            <div className="cards">
                {pizzas.map((pizza) => (
                    <CardPizza 
                        key={pizza.id}
                        img={pizza.img}
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        price={pizza.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
