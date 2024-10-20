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
            image: placeholder,
            description: 'gym picture 1',
        },
        {
            image: placeholder,
            description: 'gym picture 2',
        },
        {
            image: placeholder,
            description: 'gym picture 3',
        },
        {
            image: placeholder,
            description: 'gym picture 4',
        },
        {
            image: placeholder,
            description: 'gym picture 5',
        },
    ];

    return (
        <div className="about-page">
            <AboutHeader />
            <div className="about-page__gym-carousel">
                <Carousel className="w-full">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
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
            <AboutInfo />
        </div>
    );
};

export default About;
