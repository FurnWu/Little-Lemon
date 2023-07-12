import Home from './Homepage';
import {Booking} from './BookingPage';
import {Routes, Route} from 'react-router-dom';
import ConfirmPage from './ConfirmationPage';

export default function MainRoutes() {
    return(
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reservations" element={<Booking />} />
        <Route path="/comfirm-reservation" element={<ConfirmPage />} />
        </Routes>
    )
}