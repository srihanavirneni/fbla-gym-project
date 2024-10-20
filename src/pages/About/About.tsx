import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

import AboutInfo from '../Home/AboutInfo';
import AboutHeader from './AboutHeader';

import placeholder from '../../assets/images/placeholder.png';

import gym0 from '../../assets/images/gymphoto0.png';
import gym1 from '../../assets/images/gymphoto1.png';
import gym2 from '../../assets/images/gymphoto2.png';
import gym3 from '../../assets/images/gymphoto3.png';
import gym4 from '../../assets/images/gymphoto4.png';

import './About.css';

const ImageHolder = (props: any) => {
    return (
        <div className={`${props.className}`}>
            <img src={props.image || placeholder} alt={props.alt} />
            <p>{props.description}</p>
        </div>
    );
};

const About = () => {
    const carouselContent = [
        {
            image: gym0,
            description: 'gym picture 1',
        },
        {
            image: gym1,
            description: 'gym picture 2',
        },
        {
            image: gym2,
            description: 'gym picture 3',
        },
        {
            image: gym3,
            description: 'gym picture 4',
        },
        {
            image: gym4,
            description: 'gym picture 5',
        },
    ];

    return (
        <div className="about-page">
            <AboutHeader />
            <div className="about-page__gym-carousel">
                <Carousel className="w-full">
                    <CarouselContent>
                        {Array.from({ length: carouselContent.length }).map(
                            (_, index) => (
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
                            )
                        )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <AboutInfo />
        </div>
    );
};

export default About;
