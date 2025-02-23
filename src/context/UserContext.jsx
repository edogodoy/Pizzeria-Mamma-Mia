// context/UserContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Crear el proveedor del contexto
export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true); // Estado inicial del token

    // Método para cerrar sesión
    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ token, logout }}>
            {children}
        </UserContext.Provider>
    );
};
