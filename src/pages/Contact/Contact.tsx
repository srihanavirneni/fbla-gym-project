import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {
    faXTwitter,
    faFacebook,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import gymPhoto0 from '../../assets/images/gymphoto0.png';

import ContactHeader from './ContactHeader';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <ContactHeader />
            <div className="contact-page__content">
                <div className="contact-page__contact-details">
                    <li>
                        <h2>Phone</h2>
                        <h4>📞 (555) 123-7890</h4>
                        <p>Available Monday to Friday, 9:00 AM – 5:00 PM</p>
                    </li>

                    <hr />

                    <li>
                        <h2>E-mail</h2>
                        <h4>wvhsgymnasiumdept@gmail.com</h4>
                        <p>
                            Feel free to email us with inquiries about bookings,
                            events, or any questions you may have!
                        </p>
                    </li>

                    <hr />

                    <ul className="contact-strip__media">
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
                </div>
                <div className="contact-page__location-details">
                    <h2>Location</h2>
                    <h4>{import.meta.env.VITE_ADDRESS}</h4>
                    <p>Come visit us at our facility!</p>
                    <img src={gymPhoto0} alt="gym photo" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
