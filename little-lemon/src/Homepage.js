import Hero from "./CallToAction";
import Specials from "./Specials";
import Testimonial from "./CustomersSay";
import About from "./Chicago";

function Home() {
return(
    <div className="home">
        <Hero />
        <Specials />
        <Testimonial/>
        <About />
        
    </div>

);
};

export default Home;