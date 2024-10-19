import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faGuitar } from '@fortawesome/free-solid-svg-icons';

import placeholder from '../../assets/images/placeholder.png';
import basketballCourt from '../../assets/icons/basketballCourt.png';
import './Offers.css';

const CaseStudy = (props: any) => {
    return (
        <div className={`${props.className}`}>
            <img src={props.image || placeholder} alt={props.alt} />
            <p>{props.description}</p>
        </div>
    );
};

const Offers = () => {
    return (
        <div className="home-offers">
            <h1 className="black">Our gym is not like the rest</h1>
            <h3>
                Perfect for live concerts, trade shows, local sporting events,
                and other community events and gatherings!
            </h3>
            <div className="home-offers__content">
                <div className="home-offers__dimensions">
                    <ul>
                        <li>
                            <img src={basketballCourt} />
                            <h2 className="black">It's huge!</h2>
                            <p>
                                With the ability to seat 3,900 people, the gym
                                spans <b>200 ft x 180 ft</b>, totalling to{' '}
                                <b>23,400 sq ft</b>!
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
                    </ul>
                </div>
                <div className="home-offers__case-studies">
                    <ul>
                        <li>
                            <CaseStudy
                                className="case-studies__concert"
                                alt="concert"
                                description="Concert held by Midwxst"
                            />
                            <CaseStudy
                                className="case-studies__art-exhibit"
                                alt="art-exhibit"
                                description="Art exhibit!"
                            />
                        </li>
                        <li>
                            <CaseStudy
                                className="case-studies__sporting-event"
                                alt="sporting event"
                                description="Basketball game against East Virginia"
                            />
                            <CaseStudy
                                className="case-studies__community-gathering"
                                alt="community gathering"
                                description="High School FBLA Club Meeting"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Offers;