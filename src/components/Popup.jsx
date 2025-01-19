
const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // no hace nada si no esta abierto

    const handleOutsideClick = (e) => {
        // verifica si el clic se hace fuera del popup
        if (e.target.classList.contains('popup')) {
            onClose(); // cierra el popup
        }
    };

    return (
        <div className="popup" onClick={handleOutsideClick}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                {children} {/* renderiza el contenido pasado como prop */}
            </div>
        </div>
    );
};

export default Popup;
