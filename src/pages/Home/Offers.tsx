import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faGuitar } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';

import artExhibit from '../../assets/images/artexhibit.webp';
import basketballGame from '../../assets/images/basketballgame.webp';
import fblameeting from '../../assets/images/fblameeting.webp';
import concert from '../../assets/images/concert.webp';

import basketballCourt from '../../assets/icons/basketballCourt.png';
import './Offers.css';

const CaseStudy = (props: any) => {
    return (
        <div className={`${props.className}`}>
            <img src={props.image} alt={props.alt} />
            <p>{props.description}</p>
        </div>
    );
};

const Offers = () => {
    return (
        <div className="home-offers">
            <h1 className="black">Our gym is not like the rest</h1>
            <h2 className='text-lg'>
                Perfect for live concerts, trade shows, local sporting events,
                and other community events and gatherings!
            </h2>
            <div className="home-offers__content">
                <div className="home-offers__dimensions">
                    <motion.ul
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <li>
                            <img src={basketballCourt} alt="basketball" />
                            <h2 className="black">It's huge!</h2>
                            <p>
                                With the ability to <b>seat 3,900 people</b>,
                                the gym spans <b>200 ft x 180 ft</b>, totalling
                                to <b>23,400 sq ft</b>!
                            </p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBurger} />
                            <h2 className="black">Amenities included!</h2>
                            <p>
                                We have various food trucks and stands to keep
                                your audience well satisfied!
                            </p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGuitar} />
                            <h2 className="black">
                                State-of-the-art Acoustics and Lighting!
                            </h2>
                            <p>
                                Our gym isn't just massive - it's equipped with
                                cutting-edge sound and lighting systems, to
                                immerse your audience.
                            </p>
                        </li>
                    </motion.ul>
                </div>
                <div className="home-offers__case-studies">
                    <motion.ul
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <li>
                            <CaseStudy
                                className="case-studies__concert"
                                image={concert}
                                alt="concert"
                                description="Band Concert"
                            />
                            <CaseStudy
                                className="case-studies__art-exhibit"
                                image={artExhibit}
                                alt="art-exhibit"
                                description="Art exhibit!"
                            />
                        </li>
                        <li>
                            <CaseStudy
                                className="case-studies__sporting-event"
                                image={basketballGame}
                                alt="sporting event"
                                description="Basketball game against East Virginia"
                            />
                            <CaseStudy
                                className="case-studies__community-gathering"
                                image={fblameeting}
                                alt="community gathering"
                                description="High School FBLA Club Meeting"
                            />
                        </li>
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default Offers;
