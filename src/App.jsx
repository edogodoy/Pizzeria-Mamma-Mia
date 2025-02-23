import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import CartProvider from './context/CartContext'
import ApiProvider from './context/ApiContext'


const App = () => {

  return (
    <ApiProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </CartProvider>
    </ApiProvider>
  )
}

export default App




