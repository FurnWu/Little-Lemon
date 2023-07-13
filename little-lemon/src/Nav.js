import logo from './Assets/Logo.svg'
import './Styling/Nav.css';
import {Link} from 'react-router-dom';
import React, { useState, useRef} from 'react';
import { FaBars } from 'react-icons/fa';
function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
    return (
    <div className='nav-main'>
        <nav>
            <Link to="/" className="nav-item" ><img className='nav-logo' src={logo} alt="Little Lemon Logo" /></Link>
         <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
          
         <div className='links-container'
          ref={linksContainerRef}
          style={linkStyles}>  
        <ul  className='links' ref={linksRef}>
            <li><Link to="/" className="nav-item" style={{ textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/about-us" className="nav-item" style={{ textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/online-menu" className="nav-item" style={{ textDecoration: 'none' }}>Menu</Link></li>
            <li><Link to="/reservations" className="nav-item" style={{ textDecoration: 'none' }}>Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        </div> 
        </nav>
    

    </div>

    );
};



export default Nav;
