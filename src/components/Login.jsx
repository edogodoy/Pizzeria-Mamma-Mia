import React, { useState } from 'react';

const Login = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formData;

        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        // Supongamos que estos son los datos correctos para el login
        const mockEmail = 'asd@asd';
        const mockPassword = 'asdasd';

        if (email === mockEmail && password === mockPassword) {
            setError('');
            onSuccess(); // Notificar éxito
        } else {
            setError('Email o contraseña incorrectos.');
        }
    };

    return (
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
    );
};

export default Login;
