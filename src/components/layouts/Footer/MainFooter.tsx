import React from 'react';

import NavLinks from '../Navigation/NavLinks';

import hsLogo from '../../../assets/images/hslogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
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
                    <li className="main-footer__general-info">
                        <img src={hsLogo} alt="logo" />
                        <h3 className="black">
                            {import.meta.env.VITE_SCHOOL_NAME}
                        </h3>
                        <p className="medium">
                            As home of the Longhorns, we offer plenty of services
                            for our community - whether that be for community
                            events, or for club meetings, our Gymnasium is the
                            perfect fit!
                        </p>
                    </li>
                    <li className="main-footer__technical-info">
                        <ul>
                            <li>
                                <h5>ADDRESS</h5>
                                <p>{import.meta.env.VITE_ADDRESS}</p>
                            </li>
                            <li>
                                <h5>FOLLOW</h5>
                                <ul className="main-footer__technical-info__media-list">
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://facebook.com/"
                                        >
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                                color="white"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://X.com/"
                                        >
                                            <FontAwesomeIcon
                                                icon={faXTwitter}
                                                color="white"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.instagram.com/"
                                        >
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                color="white"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.gmail.com/"
                                        >
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                                color="white"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="main-footer__navigation">
                        <NavLinks footer />
                    </li>
                </ul>
            </footer>
        </React.Fragment>
    );
};

export default MainFooter;
