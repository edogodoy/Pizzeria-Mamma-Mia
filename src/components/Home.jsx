import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas"; // Importamos las pizzas

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="cards">
                {pizzas.map((pizza) => (
                    <CardPizza 
                        key={pizza.id} // Usamos el id como key para evitar duplicados
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
