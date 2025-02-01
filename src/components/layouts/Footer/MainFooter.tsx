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
import {
    faXTwitter,
    faFacebook,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

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
                        <li>
                            <h3>Follow</h3>
                            <ul className="footer__contact-list">
                                <li>
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <a
                                        href={`https://www.instagram.com/${
                                            import.meta.env.VITE_INSTAGRAM
                                        }`}
                                        target="_blank"
                                        className="medium"
                                    >
                                        @{import.meta.env.VITE_INSTAGRAM}
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <a
                                        href={`https://www.facebook.com/${
                                            import.meta.env.VITE_FACEBOOK
                                        }`}
                                        target="_blank"
                                        className="medium"
                                    >
                                        @{import.meta.env.VITE_FACEBOOK}
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                    <a
                                        href={`https://www.x.com/${
                                            import.meta.env.VITE_TWITTER
                                        }`}
                                        target="_blank"
                                        className="medium"
                                    >
                                        @{import.meta.env.VITE_TWITTER}
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="content-links__last">
                            <h3>Contact</h3>
                            <ul className="footer__contact-list">
                                <li>
                                    <FontAwesomeIcon icon={faLocationPin} />
                                    <a
                                        href="https://www.google.com/maps/place/Lambert+High+School/@34.1062096,-84.1389193,17z/data=!3m1!4b1!4m6!3m5!1s0x88f59a2bc0b1a8f1:0x963c015b7e5af3f2!8m2!3d34.1062096!4d-84.1389193!16s%2Fm%2F047rdgx?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        className="medium"
                                    >
                                        {import.meta.env.VITE_ADDRESS}
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a
                                        href={`mailto:${
                                            import.meta.env.VITE_EMAIL
                                        }`}
                                        target="_blank"
                                        className="medium"
                                    >
                                        {import.meta.env.VITE_EMAIL}
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a
                                        href={`tel:${
                                            import.meta.env.VITE_PHONE
                                        }`}
                                        target="_blank"
                                        className="medium"
                                    >
                                        {import.meta.env.VITE_FULL_PHONE}
                                    </a>
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
