import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    
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

    return (
        <ApiContext.Provider value={{ pizzas }}>
            {children}
        </ApiContext.Provider>
    );
};


export default ApiProvider;