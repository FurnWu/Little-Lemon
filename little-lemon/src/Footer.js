import './Footer.css';
import footerlogo from './Assets/logo_green.png'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
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
                    <ul style={{paddingBottom:"0.2rem"}}>Home</ul>
                    <ul style={{paddingBottom:"0.2rem"}}>About</ul>
                    <ul style={{paddingBottom:"0.2rem"}}>Menu</ul>
                    <ul style={{paddingBottom:"0.2rem"}}>Reservations</ul>
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
                    <ul style={{paddingBottom:"0.2rem"}}><FaFacebook/> Little Lemon Chicago</ul>
                    <ul style={{paddingBottom:"0.2rem"}}><FaInstagram/> @little.lemon_chicago</ul>
                    <ul style={{paddingBottom:"0.2rem"}}><FaTwitter/> @little.lemon_chicago</ul>
                </ul>
            </div>

                
        </div> 
           <ul className='copyright' style={{fontFamily:"Markazi", fontSize:"17px", paddingBottom:"0.5rem"}}>Copyright Little Lemon Restaurant</ul>
        </div>
        
    );
};

export default Footer;