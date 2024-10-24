import { Routes, Route, Navigate } from 'react-router-dom';

import MainNavigation from './components/layouts/Navigation/MainNavigation';
import MainFooter from './components/layouts/Footer/MainFooter';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Status from './pages/Status/Status';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';

import CreateEvent from './pages/CreateEvent/CreateEvent';

import './App.css';

const App = () => {
    return (
        <div>
            <MainNavigation />
            <main className="app-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="status" element={<Status />} />
                    <Route path="events" element={<Events />} />
                    <Route path="contact" element={<Contact />} />

                    <Route path="events/create" element={<CreateEvent />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
            <MainFooter />
        </div>
    );
};

export default App;
