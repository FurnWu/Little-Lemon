import logo from './Assets/Logo.svg'
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Homepage';
import Booking from './BookingPage';
function Nav() {
    return (
    <div className='nav-main'>
         <nav>

            <img src={logo} alt="Little Lemon Logo" />
            <ul><Link to="/" className="nav-item">Home</Link></ul>
            <ul>About</ul>
            <ul>Menu</ul>
            <ul><Link to="/reservations" className="nav-item">Reservations</Link></ul>
            <ul>Order Online</ul>
            <ul>Login</ul>

    </nav>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reservations" element={<Booking />} />
    </Routes>

    </div>

    );
};


export default Nav;
