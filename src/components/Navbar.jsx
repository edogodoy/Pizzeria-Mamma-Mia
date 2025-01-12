import './navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <p>Pizzería Mamma Mia!</p>
                <ul>
                    <li><a href="#">🍕 Home</a></li>
                    <li><a href="#">🔐 Login</a></li>
                    <li><a href="#">🔐 Register</a></li>
                    <li className='carrito'><a href="#">🛒</a></li>
                </ul>
            </nav>
        </div>
    )
}


export default Navbar;



