import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página No Encontrada</h1>
      <p>Oops! Parece que la pizza que buscas no está en el menú (o esta ruta no existe).</p>
      <p>Volver a la <Link to="/">página de inicio</Link></p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/755/755014.png" // Puedes usar otra imagen o GIF creativo
        alt="Pizza no encontrada GIF"
        style={{ maxWidth: '300px', margin: '20px auto', display: 'block' }}
      />
    </div>
  )
}

export default NotFound