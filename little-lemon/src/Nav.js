import logo from './Assets/Logo.svg'
import './Styling/Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
    <div className='nav-main'>
        <nav>
            <Link to="/" className="nav-item" ><img src={logo} alt="Little Lemon Logo" /></Link>
    
        <ul>
            <li><Link to="/" className="nav-item" style={{ textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/about-us" className="nav-item" style={{ textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/online-menu" className="nav-item" style={{ textDecoration: 'none' }}>Menu</Link></li>
            <li><Link to="/reservations" className="nav-item" style={{ textDecoration: 'none' }}>Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    
        </nav>
    

    </div>

    );
};



export default Nav;
