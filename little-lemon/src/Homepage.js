import heroImage from './Assets/restauranfood.jpg';
import Booking from './BookingPage';
import {Routes, Route, Link} from 'react-router-dom';
function Home() {
return(
    <div className="home">

        <div className="hero">
            <header style={{backgroundColor: 'grey'}}>
                <h1 style={{color: '#F4CE14'}}>Little Lemon</h1>
                <h3 style={{color: 'white'}}>Chicago</h3>
                <p style={{color: 'white'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </header>
            <div className="btn">
                <Link to="/reservations" className="btn" style={{ textDecoration: 'none' }}>
                    <button>Reserve a table</button>
                </Link>
            </div>
            
        <Routes>
            <Route path="/reservations" element={<Booking />} />
        </Routes>
        </div>
        <section>
                <img src={heroImage} alt="Restaurant Food" className='foodhero' />
        </section>
    </div>

);
};

export default Home;