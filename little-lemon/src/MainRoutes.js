import Home from './Homepage';
import {Booking} from './BookingPage';
import {Routes, Route} from 'react-router-dom';
import ConfirmPage from './ConfirmationPage';
import About from './Chicago';

export default function MainRoutes() {
    return(
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reservations" element={<Booking />} />
        <Route path="/comfirm-reservation" element={<ConfirmPage />} />
        <Route path="/about-us" element={<About />}/>
        </Routes>
    )
}