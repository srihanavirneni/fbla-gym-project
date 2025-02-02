import AboveTheFold from './AboveTheFold';
import Offers from './Offers';
import AboutInfo from './AboutInfo';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import FAQ from './FAQ';

import './Home.css';

const Home = () => {
    return (
        <div>
            <AboveTheFold />
            <Offers />
            <AboutInfo />
            <Testimonials />
            <FAQ />
            <CallToAction />
        </div>
    );
};

export default Home;
