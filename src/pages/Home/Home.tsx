import AboveTheFold from './AboveTheFold';
import Offers from './Offers';
import AboutInfo from './AboutInfo';
import Testimonials from './Testimonials';

import './Home.css';

const Home = () => {
    return (
        <div>
            <AboveTheFold />
            <Offers />
            <AboutInfo />
            <Testimonials />
        </div>
    );
};

export default Home;
