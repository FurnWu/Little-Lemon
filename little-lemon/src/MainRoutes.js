import Home from './Homepage';
import {Booking} from './BookingPage';
import {Routes, Route} from 'react-router-dom';

export default function MainRoutes() {
    return(
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reservations" element={<Booking />} />
        </Routes>
    )
}