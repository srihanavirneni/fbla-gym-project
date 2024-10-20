import AboveTheFold from './AboveTheFold';
import Offers from './Offers';
import AboutInfo from './AboutInfo';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';

import './Home.css';

const Home = () => {
    return (
        <div>
            <AboveTheFold />
            <Offers />
            <AboutInfo />
            <Testimonials />
            <CallToAction />
        </div>
    );
};

export default Home;
