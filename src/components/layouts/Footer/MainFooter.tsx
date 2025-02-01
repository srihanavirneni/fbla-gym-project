import React from 'react';

import NavLinks from '../Navigation/NavLinks';
import Copyright from './Copyright';

import hsLogo from '../../../assets/images/hslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faLocationPin,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
// import {
//     faXTwitter,
//     faFacebook,
//     faInstagram,
// } from '@fortawesome/free-brands-svg-icons';

import './MainFooter.css';

const MainFooter = () => {
    return (
        <React.Fragment>
            <footer className="main-footer">
                <ul className="main-footer__content-list">
                    <li className="main-footer__tldr-info">
                        <img src={hsLogo} alt="logo" />
                        <h3 className="black">
                            {import.meta.env.VITE_SCHOOL_NAME}
                        </h3>
                        <p className="medium">
                            As home of the Longhorns, we offer plenty of
                            services for our community - whether that be for
                            community events, or for club meetings, our
                            Gymnasium is the perfect fit!
                        </p>
                    </li>
                    <ul className="footer-content__links">
                        <li>
                            <h3>Browse</h3>
                            <NavLinks footer />
                        </li>

                        <li className='content-links__last'>
                            <h3>Contact</h3>
                            <ul className="footer__contact-list">
                                <li>
                                    <FontAwesomeIcon icon={faLocationPin} />
                                    <p className="medium">
                                        {import.meta.env.VITE_ADDRESS}
                                    </p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p className="medium">
                                        {import.meta.env.VITE_EMAIL}
                                    </p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <p className="medium">
                                        {import.meta.env.VITE_FULL_PHONE}
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </ul>
            </footer>
            <Copyright />
        </React.Fragment>
    );
};

export default MainFooter;
