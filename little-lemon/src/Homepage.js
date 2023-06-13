import heroImage from './Assets/restauranfood.jpg';
function Home() {
return(
    <div className="Home">

        <div className="hero">
            <header style={{backgroundColor: 'gray'}}>
                <h1 style={{color: '#F4CE14'}}>Little Lemon</h1>
                <h3 style={{color: 'white'}}>Chicago</h3>
                <p style={{color: 'white'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </header>
            <section>
                <img src={heroImage} alt="Restaurant Food" />
            </section>
        </div>
    </div>

);
};

export default Home;