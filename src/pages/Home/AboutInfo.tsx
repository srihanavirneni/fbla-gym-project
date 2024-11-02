import placeholder from '../../assets/images/placeholder.png';
import garbaNight from '../../assets/images/garbanight.png';
import hsLogo from '../../assets/images/hslogo.png';

import './AboutInfo.css';

const CaseStudy = (props: any) => {
    return (
        <div className={`${props.className}`}>
            <img src={props.image || placeholder} alt={props.alt} />
            <p>{props.description}</p>
        </div>
    );
};

const AboutInfo = (props: any) => {
    return (
        <div className="home__about-info-main">
            <div className="home__about-info">
                <div className="about-info__visual">
                    <CaseStudy
                        image={garbaNight}
                        alt="gymnasium"
                        description="Gymnasium during Garba Night!"
                    />
                </div>
                <div className="about-info__content">
                    <img src={hsLogo} alt="school image" />
                    <h1 className="black">Who are we?</h1>
                    {props.showDeepInfo ? (
                        <div>
                            <p>
                                At Lambert High School, we are a vibrant and
                                forward-thinking community committed to
                                providing an exceptional environment for
                                athletics, performances, and large-scale events.
                                Our state-of-the-art gymnasium is not merely a
                                facility for sports—it serves as the heart of
                                our campus, where students, families, and
                                community members come together to share
                                experiences and celebrate achievements. With its
                                modern amenities and adaptable design, the
                                gymnasium accommodates a variety of needs,
                                transforming seamlessly from a premier sports
                                venue to a stage for performances, concerts, and
                                ceremonies. For students and families, it’s a
                                place of celebration and milestones, including
                                graduation ceremonies that mark the beginning of
                                new chapters. For the community at large, it is
                                a versatile space where we unite around shared
                                goals and values, fostering a spirit of
                                connection and inclusivity.
                            </p>
                            <br />
                            <p>
                                Our gymnasium stands as a symbol of Lambert High
                                School’s dedication to excellence, community,
                                and versatility. Whether hosting regional
                                athletic tournaments, student showcases, charity
                                events, or civic gatherings, this space offers a
                                welcoming environment that adapts to the needs
                                of each event. It is designed to elevate
                                experiences, create lasting memories, and
                                provide a setting that brings people together
                                for a shared purpose. At Lambert, we believe in
                                the power of a well-designed, inclusive space to
                                inspire, engage, and build a stronger community.
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
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;
