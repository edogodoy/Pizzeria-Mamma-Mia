import React, { useState } from 'react';
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        if (!formData.email || !formData.password) {
            setError('Por favor, completa todos los campos.')
            return
        }

        setError('')
        await auth(formData.email, formData.password)
    };

    const auth = async (userEmail, password) => {
        try {
            const URL = "http://localhost:5000/api/auth/login"
            const payload = { email: userEmail, password }
            
            const user = await axios.post(URL, payload)
            console.log(user)
            localStorage.setItem('token', user.data.token)
            console.log('User: ', user.data)
    
        } catch (error) {
            if (password.length < 6) {
                setError('La contraseña debe tener al menos 6 caracteres.');
                return;
            }
            console.log(error)
        }
    }

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
                <button type="submit">Ingresar</button>

                {error && <p className='mensaje-error'>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
