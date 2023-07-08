import Hero from "./CallToAction";
import Specials from "./Specials";
import Testimonial from "./CustomersSay";
import About from "./Chicago";
import Footer from "./Footer";

function Home() {
return(
    <div className="home">
        <Hero />
        <Specials />
        <Testimonial/>
        <About />
        <Footer />
    </div>

);
};

export default Home;