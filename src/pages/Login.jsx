import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const Login = ({ onSuccess }) => {
    const { login, loading } = useContext(UserContext);
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        if (formData.password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        setError('');
        
        try {
            const result = await login(formData.email, formData.password);
            
            if (result.success) {
                if (onSuccess) {
                    onSuccess(); // Llama a la función pasada como prop para notificar el éxito
                } else {
                    navigate('/profile');
                }
            } else {
                setError(result.error?.message || 'Credenciales inválidas');
            }
        } catch (err) {
            setError('Error al iniciar sesión. Por favor, intenta de nuevo.');
        }
    };

    return (
        <div className='login-cent'>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <div>
                    <div className="login-content">
                        <label htmlFor="email">Email:</label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="login-content">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            required
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Procesando...' : 'Ingresar'}
                </button>

                {error && <p className='mensaje-error'>{error}</p>}
            </form>
        </div>
    );
};

export default Login;