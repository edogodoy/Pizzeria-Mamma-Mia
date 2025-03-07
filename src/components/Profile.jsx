import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { token, email, profile, getProfile, loading, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Si no hay token, redirigir al login
    if (!token) {
      navigate('/login');
      return;
    }
    
    // Cargar el perfil solo una vez al montar el componente
    getProfile();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, navigate]); // Eliminamos getProfile de las dependencias

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {(profile || email) ? (
        <div>
          <div>
            <h3>Perfil de Usuario</h3>
          </div>
          <div>
            <div>
              <img
                src='https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg'
                alt='User Avatar'
              />
              <h5><strong>Email:</strong></h5>
              <p>{profile?.email || email}</p>
              
              {/* Botón para cerrar sesión */}
              <button 
                onClick={handleLogout}
                className="logout-button"
              >
                Cerrar Sesión
              </button>
            </div>
            <hr />
          </div>
        </div>
      ) : (
        <div>
          <p><strong>Por favor, inicia sesión para ver tu perfil.</strong></p>
        </div>
      )}
    </div>
  );
};

export default Profile;