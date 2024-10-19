import pin from '../../../assets/icons/pin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {
    faXTwitter,
    faFacebook,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './ContactStrip.css';

const ContactStrip = () => {
    return (
        <div className="contact-strip">
            <ul className="contact-strip__location">
                <li>
                    <img src={pin} alt="location" />
                    <p className='bold'>{import.meta.env.VITE_ADDRESS}</p>
                </li>
            </ul>
            <ul className="contact-strip__media">
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://facebook.com/"
                    >
                        <FontAwesomeIcon icon={faFacebook} color="white" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://X.com/"
                    >
                        <FontAwesomeIcon icon={faXTwitter} color="white" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/"
                    >
                        <FontAwesomeIcon icon={faInstagram} color="white" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.gmail.com/"
                    >
                        <FontAwesomeIcon icon={faEnvelope} color="white" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactStrip;
