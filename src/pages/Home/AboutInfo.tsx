import placeholder from '../../assets/images/placeholder.png';
import garbaNight from '../../assets/images/garbanight.png';
import hsLogo from '../../assets/images/hslogo.png'

import './AboutInfo.css';

const CaseStudy = (props: any) => {
    return (
        <div className={`${props.className}`}>
            <img src={props.image || placeholder} alt={props.alt} />
            <p>{props.description}</p>
        </div>
    );
};

const AboutInfo = () => {
    return (
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
                <p>
                    We are a dynamic community based in West Virginia High
                    School that is dedicated to providing an outstanding space
                    for athletics, performances, and large-scale events. Our
                    state-of-the-art gymnasium is more than just a place for
                    sports—it's a versatile venue that brings people together
                    for concerts, graduations, community gatherings, and
                    whatever you can imagine.
                </p>
                <p className="about-info__content-slogan bold">
                    We are here to elevate every decision!
                </p>
            </div>
        </div>
    );
};

export default AboutInfo;
