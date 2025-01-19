import React, { useState } from 'react';

const Register = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { password, confirmPassword } = formData;

        if (password.length < 6 || password.length > 12) {
            setError('La contraseña debe tener entre 6 y 12 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        setError('');
        onSuccess(); // Llama a la función pasada como prop para notificar el éxito
    };

    return (
        <form className='register-form' onSubmit={handleSubmit}>
            <div>
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
            <div>
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
            <div>
                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <input
                    required
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Registrar</button>

            {error && <p>{error}</p>}
        </form>
    );
};

export default Register;

