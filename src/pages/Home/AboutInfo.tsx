import garbaNight from '../../assets/images/garbanight.webp';
import hsLogo from '../../assets/images/hslogo.webp';

import { motion } from 'framer-motion';

import './AboutInfo.css';

const CaseStudy = (props: any) => {
    return (
        <div className={`${props.className}`}>
            <img src={props.image} alt={props.alt} />
            <p>{props.description}</p>
        </div>
    );
};

const AboutInfo = (props: any) => {
    return (
        <div className="home__about-info-main">
            <div className="home__about-info">
                <div className="about-info__visual">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CaseStudy
                            image={garbaNight}
                            alt="gymnasium"
                            description="Gymnasium during Garba Night!"
                        />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="about-info__content"
                >
                    <img src={hsLogo} alt="school image" />
                    <h1 className="black">Who are we?</h1>
                    {props.showDeepInfo ? (
                        <div>
                            <p>
                                At Lambert High School, we are a dynamic and
                                future-focused community dedicated to fostering
                                excellence in athletics, performances, and
                                large-scale events. Our state-of-the-art
                                gymnasium is more than just a sports facility—it
                                is the heartbeat of our campus, a premier
                                gathering space where students, families, and
                                the broader community unite to celebrate
                                achievements and milestones. Engineered with
                                cutting-edge amenities and a versatile, adaptive
                                design, this venue seamlessly transforms from an
                                elite athletic arena into a stage for
                                electrifying performances, prestigious
                                ceremonies, and unforgettable events.
                                <br />
                                <br />
                                For students and families, it represents a place
                                of triumph and tradition—home to championship
                                games, groundbreaking performances, and
                                graduation ceremonies that signify new
                                beginnings. For the community, it serves as a
                                hub of connection and engagement, reinforcing
                                our shared values and collective spirit. Whether
                                hosting high-stakes regional tournaments,
                                inspiring student showcases, impactful charity
                                events, or vital civic gatherings, our gymnasium
                                elevates every experience.
                                <br />
                                <br />A true symbol of Lambert High School’s
                                commitment to excellence, inclusivity, and
                                innovation, this space is designed to inspire,
                                unite, and leave a lasting legacy. At Lambert,
                                we believe that a world-class environment
                                fosters greatness, strengthens bonds, and
                                ignites the potential within us all.
                            </p>
                        </div>
                    ) : (
                        <p>
                            We are a dynamic community based in{' '}
                            {import.meta.env.VITE_SCHOOL_NAME} that is dedicated
                            to providing an outstanding space for athletics,
                            performances, and large-scale events. Our
                            state-of-the-art gymnasium is more than just a place
                            for sports—it's a versatile venue that brings people
                            together for concerts, graduations, community
                            gatherings, and whatever you can imagine.
                        </p>
                    )}
                    <p className="about-info__content-slogan bold">
                        We are here to elevate every decision!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutInfo;
