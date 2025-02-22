import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {
    faXTwitter,
    faFacebook,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import gymPhoto0 from '../../assets/images/gym.webp';

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
                        <h4 className="mb-3">
                            {import.meta.env.VITE_FULL_PHONE}
                        </h4>
                        <p>Available Monday to Friday, 9:00 AM – 5:00 PM</p>
                    </li>

                    <hr />

                    <li>
                        <h2>E-mail</h2>
                        <h4 className="mb-3">{import.meta.env.VITE_EMAIL}</h4>
                        <p>
                            Feel free to email us with inquiries about bookings,
                            events, or any questions you may have!
                        </p>
                    </li>

                    <hr />

                    <ul className="contact-content__media">
                        <li>
                            <a
                                target="_blank"
                                href={`https://facebook.com/${
                                    import.meta.env.VITE_FACEBOOK
                                }`}
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
                                href={`https://X.com/${
                                    import.meta.env.VITE_TWITTER
                                }`}
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
                                href={`https://www.instagram.com/${
                                    import.meta.env.VITE_INSTAGRAM
                                }`}
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
                                href={`mailto:${import.meta.env.VITE_EMAIL}`}
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
