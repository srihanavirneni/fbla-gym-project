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
                    <a
                        href="https://www.google.com/maps/place/Lambert+High+School/@34.1062096,-84.1389193,17z/data=!3m1!4b1!4m6!3m5!1s0x88f59a2bc0b1a8f1:0x963c015b7e5af3f2!8m2!3d34.1062096!4d-84.1389193!16s%2Fm%2F047rdgx?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        className="bold"
                    >
                        {import.meta.env.VITE_FULL_ADDRESS}
                    </a>
                </li>
            </ul>
            <ul className="contact-strip__media">
                <li>
                    <a
                        target="_blank"
                        aria-label="Facebook"
                        rel="noopener noreferrer"
                        href={`https://facebook.com/${import.meta.env.VITE_FACEBOOK}`}
                    >
                        <FontAwesomeIcon icon={faFacebook} color="white" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        aria-label="Twitter"
                        rel="noopener noreferrer"
                        href={`https://X.com/${import.meta.env.VITE_TWITTER}`}
                    >
                        <FontAwesomeIcon icon={faXTwitter} color="white" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        aria-label="Instagram"
                        rel="noopener noreferrer"
                        href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM}`}
                    >
                        <FontAwesomeIcon icon={faInstagram} color="white" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        aria-label="Email"
                        rel="noopener noreferrer"
                        href={`mailto:${import.meta.env.VITE_EMAIL}`}
                    >
                        <FontAwesomeIcon icon={faEnvelope} color="white" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactStrip;
