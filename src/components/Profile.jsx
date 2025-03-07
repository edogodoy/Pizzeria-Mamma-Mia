import { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token')

      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/api/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          console.log('Api Response: ', response.data)
          setUser(response.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchUser()
  }, [])

  return (
    <div>
      {user
        ? (
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
                <p>{user.email}</p>
              </div>
              <hr />
            </div>
          </div>
          )
        : (
          <div>
            <p><strong>Por favor, inicia sesión para ver tu perfil.</strong></p>
          </div>
          )}
    </div>
  )
}

export default Profile
