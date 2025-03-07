import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

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
                    <NavLink to="/calendar" className="medium">
                        Calendar
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
            <ul className="nav-links__footer">
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
                    <div className="nav-links__phone">
                        <Button asChild variant={'accent'}>
                            <a
                                href={`tel:${import.meta.env.VITE_PHONE}`}
                                target="_blank"
                                className="bold"
                            >
                                <FontAwesomeIcon icon={faPhone} />
                                {import.meta.env.VITE_FULL_PHONE}
                            </a>
                        </Button>
                    </div>
                    <div className="nav-links__cta">
                        <Button asChild variant={'accent'}>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </Button>
                    </div>
                    <div className="nav-links__cta nav-links__cta-primary">
                        <Button asChild variant={'accent'}>
                            <NavLink to="/events/create">Host an Event</NavLink>
                        </Button>
                    </div>
                </ul>
            </ul>
        </>
    );
};

export default NavLinks;
