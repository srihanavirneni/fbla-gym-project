import { Routes, Route, Navigate } from 'react-router-dom';

import MainNavigation from './components/layouts/Navigation/MainNavigation';
import MainFooter from './components/layouts/Footer/MainFooter';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Updates from './pages/Updates/Updates';
import Calendar from './pages/Calendar/Calendar';

import './App.css';

const App = () => {
    return (
        <div>
            <MainNavigation />
            <main className="app-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/updates" element={<Updates />} />
                    <Route path="/calendar" element={<Calendar />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
            <MainFooter />
        </div>
    );
};

export default App;
