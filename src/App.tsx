import { Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';

import ScrollToTop from './components/function/ScrollToTop';

import MainNavigation from './components/layouts/Navigation/MainNavigation';
import MainFooter from './components/layouts/Footer/MainFooter';

import Home from './pages/Home/Home';
const About = React.lazy(() => import('./pages/About/About'));
const Status = React.lazy(() => import('./pages/Status/Status'));
const Events = React.lazy(() => import('./pages/Events/Events'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Calendar = React.lazy(() => import('./pages/Calendar/Calendar'));
const Transaction = React.lazy(() => import('./pages/Transaction/Transaction'));

const CreateEvent = React.lazy(() => import('./pages/CreateEvent/CreateEvent'));
const Booking = React.lazy(() => import('./pages/Booking/Booking'));

import './App.css';

const App = () => {
    return (
        <div>
            <ScrollToTop />
            <MainNavigation />
            <main className="app-content">
                <Suspense fallback={<div>Loading...</div>}>
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
                        <Route
                            path="events/payment/:id"
                            element={<Booking />}
                        />
                        <Route
                            path="events/payment/:id/:path"
                            element={<Booking />}
                        />
                        <Route
                            path="events/payment/:id/transaction/:seats"
                            element={<Transaction />}
                        />

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
            </main>
            <MainFooter />
        </div>
    );
};

export default App;
