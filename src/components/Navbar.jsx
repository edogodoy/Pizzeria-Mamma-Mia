import { useState } from 'react';
import Popup from './Popup';
import Register from './Register';
import Login from './Login';

const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [successType, setSuccessType] = useState(''); // Almacena el tipo de operación exitosa

    const handleOpenPopup = (content) => {
        setPopupContent(content);
        setIsPopupOpen(true);
        setIsSuccess(false); // Reinicia el estado al abrir el popup
    };

    const handleClosePopup = () => setIsPopupOpen(false); // Cierra el popup

    const handleRegisterSuccess = () => {
        setIsSuccess(true);
        setSuccessType('register'); // Define el tipo de operación exitosa como registro
    };

    const handleLoginSuccess = () => {
        setIsSuccess(true);
        setSuccessType('login'); // Define el tipo de operación exitosa como login
    };

    // Mapa de componentes para el contenido del popup
    const popupComponents = {
        register: <Register onSuccess={handleRegisterSuccess} />,
        login: <Login onSuccess={handleLoginSuccess} />,
    };

    return (
        <>
            <nav>
                <p>Pizzería Mamma Mia!</p>
                <ul>
                    <li><a href="../../index.html">🍕 Home</a></li>
                    <li><a href="#" onClick={() => handleOpenPopup('login')}>🔐 Login</a></li>
                    <li><a href="#" onClick={() => handleOpenPopup('register')}>🔐 Register</a></li>
                    <li className="carrito"><a href="#">🛒</a></li>
                </ul>
            </nav>

            <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                {isSuccess ? (
                    <>
                        {successType === 'register' ? (
                            <p className="registro-exitoso">¡Registro exitoso!</p>
                        ) : successType === 'login' ? (
                            <p className="registro-exitoso">¡Inicio de sesión exitoso!</p>
                        ) : null}
                        <button className="btn-registro-exitoso" onClick={handleClosePopup}>Cerrar</button>
                    </>
                ) : (
                    popupComponents[popupContent] || <p>Error: Componente no encontrado</p>
                )}
            </Popup>
        </>
    );
};

export default Navbar;
