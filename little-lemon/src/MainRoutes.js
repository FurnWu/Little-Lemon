import Home from './Homepage';
import BookingForm from "./BookingForm";
import {Routes, Route} from 'react-router-dom';
import ConfirmPage from './ConfirmationPage';
import About from './Chicago';
import OnlineMenu from './OnlineMenu';

export default function MainRoutes() {
    return(
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingForm />} />
        <Route path="/comfirm-reservation" element={<ConfirmPage />} />
        <Route path="/about-us" element={<About />}/>
        <Route path="/online-menu" element={<OnlineMenu/>} />
        </Routes>
    )
}