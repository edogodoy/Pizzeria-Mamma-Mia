import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import CartProvider from './context/CartContext'
import ApiProvider from './context/ApiContext'
import { UserContext, UserProvider } from './context/UserContext'
import { Cart, Home, Login, Pizza, Register } from './pages/index'
import { useContext } from 'react'


const AppRoutes = () => {
  const { token } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
      <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id/:name" element={<Pizza />} />
      <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <ApiProvider>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <AppRoutes />
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </ApiProvider>
  );
};

export default App;
