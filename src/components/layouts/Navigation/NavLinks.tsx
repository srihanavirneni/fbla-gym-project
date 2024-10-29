import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import './NavLinks.css';

const NavLinks = (props: any) => {
    const MainList = () => {
        return (
            <React.Fragment>
                <li>
                    <NavLink to="/" className="medium">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="medium">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/events" className="medium">
                        Events
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/status" className="medium">
                        Status
                    </NavLink>
                </li>
            </React.Fragment>
        );
    };

    if (props.footer) {
        return (
            <ul>
                <MainList />
                <li>
                    <NavLink to="/contact" className="bold">
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/events/create" className="bold">
                        Host an Event
                    </NavLink>
                </li>
            </ul>
        );
    }

    return (
        <>
            <ul className="nav-links">
                <ul className="nav-links__centered">
                    <MainList />
                </ul>
                <ul className="nav-links__right">
                    <div className="nav-links__cta">
                        <Button asChild>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </Button>
                    </div>
                    <div className="nav-links__cta">
                        <Button asChild>
                            <NavLink to="/events/create">Host an Event</NavLink>
                        </Button>
                    </div>
                </ul>
            </ul>
        </>
    );
};

export default NavLinks;
