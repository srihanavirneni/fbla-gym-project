import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks.tsx';
import SideDrawer from './SideDrawer.tsx';
import Backdrop from '../../interface/Backdrop.tsx';
import ContactStrip from './ContactStrip.tsx';

import menu from '../../../assets/icons/menu.png';
import hslogo from '../../../assets/images/hslogo.png';
import './MainNavigation.css';

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-links">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <ContactStrip />
            <header className="main-header">
                <div className="brand">
                    <img className="logo" src={hslogo} alt="Logo" />
                    <h2>
                        <Link to="/">
                            <ul>
                                <li className="brand__sub-title medium">
                                    {import.meta.env.VITE_SCHOOL_NAME}
                                </li>
                                <li className="brand__main-title bold">
                                    Gymnasium
                                </li>
                            </ul>
                        </Link>
                    </h2>
                </div>
                <nav className="main-navigation__nav-links">
                    <NavLinks />
                </nav>
                <button
                    className="main-navigation__menu-btn"
                    onClick={openDrawerHandler}
                >
                    <img src={menu} alt="Menu" />
                </button>
            </header>
        </React.Fragment>
    );
};

export default MainNavigation;
