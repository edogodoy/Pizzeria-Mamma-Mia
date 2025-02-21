import { useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { ApiContext } from "../context/ApiContext";



const Home = () => {
    const { pizzas } = useContext(ApiContext);

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
