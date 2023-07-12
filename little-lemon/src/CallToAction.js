import heroImage from './Assets/restauranfood.jpg';
import './Styling/CallToAction.css';
import {Link} from 'react-router-dom';
function Hero() {
return(
    
        <div className="banner">
        <div className="hero">
            <header>
                <h1 style={{color: '#F4CE14'}}>Little Lemon</h1>
                <h2 style={{color: 'white'}}>Chicago</h2>
                <p>We are a family owned</p>
                <p>Mediterranean restaurant,</p>
                <p>focused on traditional</p>
                <p>recipes served with a modern</p>
                <p>twist.</p>
            </header>
            <div className="btn">
                <Link to="/reservations" style={{ textDecoration: 'none' }}>
                    <button className='hero-btn'>Reserve a Table</button>
                </Link>
            </div>
        </div>
        <section>
                <img src={heroImage} alt="Restaurant Food" className='foodhero' />
        </section>
    </div>
    
    

);
};

export default Hero;