import logo from './Assets/Logo.svg'
import './Nav.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Homepage';
import {Booking} from './BookingPage';
function Nav() {
    return (
    <div className='nav-main'>
        <nav>
            <Link to="/" className="nav-item" ><img src={logo} alt="Little Lemon Logo" /></Link>
    
        <ul>
            <li><Link to="/" className="nav-item" style={{ textDecoration: 'none' }}>Home</Link></li>
            <li>About</li>
            <li>Menu</li>
            <li><Link to="/reservations" className="nav-item" style={{ textDecoration: 'none' }}>Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    
        </nav>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reservations" element={<Booking />} />
    </Routes>

    </div>

    );
};


export default Nav;
