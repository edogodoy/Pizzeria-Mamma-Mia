import { useState, useContext } from 'react';
import Popup from './Popup';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [successType, setSuccessType] = useState('');
    const { calculateTotal } = useContext(CartContext);


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
                    <li><Link to="/">🍕 Home</Link></li>
                    <li><Link to="/register">Registrarse</Link></li>
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                    <li><Link to="/profile">Perfil</Link></li>
                    {/* <li><Link href="#" onClick={() => handleOpenPopup('login')}>🔐 Login</Link></li> */}
                    {/* <li><Link href="#" onClick={() => handleOpenPopup('register')}>🔐 Register</Link></li> */}
                    <li className="carrito"><Link to="/cart">🛒<span>${calculateTotal().toLocaleString("es-ES")}</span></Link></li>
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
