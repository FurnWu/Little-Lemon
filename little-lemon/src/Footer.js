import './Styling/Footer.css';
import footerlogo from './Assets/logo_green.png'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {Link} from 'react-router-dom';
function Footer() {
    return(
        <div style={{backgroundColor:"#EDEFEE", paddingBottom:"1rem"}}>
        <div className="footer">
            <div className="footer-logo">
                <img src={footerlogo} alt="footer logo"/>
            </div>
            <div className="navigation">
               <ul>
                    <ul style={{fontWeight:'bold', fontFamily:"Markazi", fontSize:"18px", paddingBottom:"0.5rem"}}>Navigation</ul>
                    <ul style={{paddingBottom:"0.2rem"}}><Link to="/">Home</Link></ul>
                    <ul style={{paddingBottom:"0.2rem"}}><Link to="/about-us">About</Link></ul>
                    <ul style={{paddingBottom:"0.2rem"}}><Link to="/online-menu" style={{ textDecoration: 'none' }}>Menu</Link></ul>
                    <ul style={{paddingBottom:"0.2rem"}}><Link to="/reservations">Reservations</Link></ul>
                    <ul style={{paddingBottom:"0.2rem"}}>Order Online</ul>
                    <ul style={{paddingBottom:"0.2rem"}}>Login</ul>
               </ul>
            </div>
            <div className="contact">
                <ul>
                    <ul style={{fontWeight:'bold', fontFamily:"Markazi", fontSize:"18px", paddingBottom:"0.5rem"}}>Contact Info.</ul>
                    <ul style={{paddingBottom:"0.2rem"}}>8619 S Wolcott Ave,<br></br> Chicago, Illinois 60620</ul>
                    <ul style={{paddingBottom:"0.2rem"}}>(773) 238-XXXX</ul>
                    <ul style={{paddingBottom:"0.2rem"}}>little-lemon@email.com</ul>
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <ul style={{fontWeight:'bold', fontFamily:"Markazi", fontSize:"18px", paddingBottom:"0.5rem"}}>Social Media</ul>
                    <ul style={{paddingBottom:"0.2rem"}}><a href='https://www.facebook.com/'><FaFacebook/> &nbsp;Little Lemon Chicago</a></ul>
                    <ul style={{paddingBottom:"0.2rem"}}><a href='https://www.instagram.com/'><FaInstagram/>&nbsp;&nbsp;@little.lemon_chicago</a></ul>
                    <ul style={{paddingBottom:"0.2rem"}}><a href='https://twitter.com/'><FaTwitter/>&nbsp;&nbsp;@little.lemon_chicago</a></ul>
                </ul>
            </div>

                
        </div> 
           <ul className='copyright' style={{fontFamily:"Markazi", fontSize:"17px", paddingBottom:"0.5rem"}}>Copyright Little Lemon Restaurant</ul>
        </div>
        
    );
};


export default Footer;
