import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [email, setEmail] = useState(() => localStorage.getItem('email') || null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Login
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const URL = "http://localhost:5000/api/auth/login"
      const payload = { email, password }
      const response = await axios.post(URL, payload)
      
      const { token: newToken, email: userEmail } = response.data;
      
      // Guardar en estado
      setToken(newToken);
      setEmail(userEmail);
      
      // Guardar en localStorage
      localStorage.setItem('token', newToken);
      localStorage.setItem('email', userEmail);
      
      setLoading(false);
      return { success: true, data: response.data };
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'Error al iniciar sesión');
      return { success: false, error: error.response?.data || error.message };
    }
  };

  // Register
  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const URL = "http://localhost:5000/api/auth/register"
      const payload = { email, password }
      const response = await axios.post(URL, payload)
      
      const { token: newToken, email: userEmail } = response.data;
      
      // Guardar en estado
      setToken(newToken);
      setEmail(userEmail);
      
      // Guardar en localStorage
      localStorage.setItem('token', newToken);
      localStorage.setItem('email', userEmail);
      
      setLoading(false);
      return { success: true, data: response.data };
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'Error al registrar usuario');
      return { success: false, error: error.response?.data || error.message };
    }
  };

  // Logout
  const logout = () => {
    // Eliminar del estado
    setToken(null);
    setEmail(null);
    setProfile(null);
    
    // Eliminar del localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  // Método para obtener el perfil del usuario
  const getProfile = async () => {
    if (!token) return null;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setProfile(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'Error al obtener el perfil');
      return null;
    }
  };

  // Verificar autenticación al cargar
  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ 
      token, 
      email, 
      profile,
      loading,
      error,
      login,
      register,
      logout,
      getProfile
    }}>
      {children}
    </UserContext.Provider>
  );
};