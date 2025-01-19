import { useState } from 'react';
import Popup from './Popup'; // Asegúrate de importar el componente Popup
import Register from './Register'; // Asegúrate de importar el componente Register

const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
        setIsSuccess(false); // Reinicia el estado al abrir el popup
    };

    const handleClosePopup = () => setIsPopupOpen(false);

    const handleRegisterSuccess = () => setIsSuccess(true);

    return (
        <>
            <nav>
                <p>Pizzería Mamma Mia!</p>
                <ul>
                    <li><a href="#">🍕 Home</a></li>
                    <li><a href="#">🔐 Login</a></li>
                    <li><a href="#" onClick={handleOpenPopup}>🔐 Register</a></li>
                    <li className='carrito'><a href="#">🛒</a></li>
                </ul>
            </nav>

            <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                {isSuccess ? (
                    <>
                        <p className='registro-exitoso'>¡Registro exitoso!</p>
                        <button className='btn-registro-exitoso' onClick={handleClosePopup}>Cerrar</button>
                    </>
                ) : (
                    <Register onSuccess={handleRegisterSuccess} />
                )}
            </Popup>
            
        </>
    );
}

export default Navbar;
