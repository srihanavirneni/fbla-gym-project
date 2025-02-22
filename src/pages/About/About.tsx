import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Map from '@/components/interface/Map';

import AboutInfo from '../Home/AboutInfo';
import AboutHeader from './AboutHeader';

import gym1 from '../../assets/images/gymphoto1.webp';
import gym2 from '../../assets/images/gymphoto2.webp';
import gym3 from '../../assets/images/gymphoto3.webp';
import gym4 from '../../assets/images/gymphoto4.webp';

import './About.css';

const ImageHolder = (props: any) => {
    return (
        <div className={`${props.className}`}>
            <img src={props.image} alt={props.alt} />
            <p>{props.description}</p>
        </div>
    );
};

const About = () => {
    const carouselContent = [
        {
            image: gym1,
            description: 'Gym picture 1',
        },
        {
            image: gym2,
            description: 'Gym picture 2',
        },
        {
            image: gym3,
            description: 'Gym picture 3',
        },
        {
            image: gym4,
            description: 'Gym picture 4',
        },
    ];

    return (
        <div className="about-page">
            <AboutHeader />

            <div className="about__map-visual">
                <Map
                    className="about-map-visual__map"
                    center={[34.10579607887825, -84.14017624823752]}
                    markerPosition={[34.10638455314906, -84.13900138938705]}
                    zoom={50}
                />
            </div>
            <div className="about-page__map-directory">
                <div className="about__map-directions">
                    <h2 className="black">Special Directions</h2>
                    <p>
                        After arriving to the destination, please follow the
                        directions below to enter the facility.
                    </p>
                    <h4>{import.meta.env.VITE_ADDRESS}</h4>
                    <hr />
                    <ul>
                        <li>
                            <b>1. </b>
                            Enter through the main office
                        </li>
                        <li>
                            <b>2. </b>
                            Check in through the box office to verify your
                            tickets. If you are hosting an event, talk to the
                            gymnasium counselors.
                        </li>
                        <li>
                            <b>3. </b>
                            Enter the gym and take a seat at your respective
                            spot.
                        </li>
                    </ul>
                </div>
                <div className="about-page__gym-carousel">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {Array.from({
                                length: carouselContent.length,
                            }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <ImageHolder
                                        className="gym-carousel__item-content"
                                        image={carouselContent[index].image}
                                        alt="picture of gymnasium"
                                        description={
                                            carouselContent[index].description
                                        }
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>

            <AboutInfo showDeepInfo />
        </div>
    );
};

export default About;
