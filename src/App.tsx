import { Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './components/function/ScrollToTop';

import MainNavigation from './components/layouts/Navigation/MainNavigation';
import MainFooter from './components/layouts/Footer/MainFooter';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Status from './pages/Status/Status';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
import Calendar from './pages/Calendar/Calendar';
import Transaction from './pages/Transaction/Transaction';

import CreateEvent from './pages/CreateEvent/CreateEvent';
import Booking from './pages/Booking/Booking';

import './App.css';

const App = () => {
    return (
        <div>
            <ScrollToTop />
            <MainNavigation />
            <main className="app-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="status" element={<Status />} />
                    <Route path="events" element={<Events />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="calendar" element={<Calendar />} />

                    <Route path="events/create" element={<CreateEvent />} />
                    <Route
                        path="events/create/:date"
                        element={<CreateEvent />}
                    />
                    <Route path="events/payment/:id" element={<Booking />} />
                    <Route path="events/payment/:id/:path" element={<Booking />} />
                    <Route
                        path="events/payment/:id/transaction/:seats"
                        element={<Transaction />}
                    />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
            <MainFooter />
        </div>
    );
};

export default App;
