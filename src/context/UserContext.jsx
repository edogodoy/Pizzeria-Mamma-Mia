import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const [user, setUser] = useState({
    email: 'qwer@asdf.com',
    password: 'hola1234'
  });

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
