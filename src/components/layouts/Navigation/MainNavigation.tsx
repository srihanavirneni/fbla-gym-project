import React, { useState } from 'react';

import Brand from '@/components/interface/Brand.tsx';

import NavLinks from './NavLinks.tsx';
import SideDrawer from './SideDrawer.tsx';
import Backdrop from '../../interface/Backdrop.tsx';
import ContactStrip from './ContactStrip.tsx';

import menu from '../../../assets/icons/menu.webp';
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
                    <Brand mobile />
                    <NavLinks />
                </nav>
            </SideDrawer>

            <ContactStrip />
            <header className="main-header">
                <Brand />
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
