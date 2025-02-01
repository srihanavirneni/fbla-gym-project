import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import './CallToAction.css';

const CallToAction = () => {
    return (
        <div className="home__cta">
            <h1 className="black">What are you waiting for?</h1>
            <p>
                Book a reservation at our gymnasium or register for an event
                today!
            </p>
            <div className="cta__btn-list">
                <Button asChild variant={'accent'}>
                    <Link to="/contact" className="bold">
                        Contact Us
                    </Link>
                </Button>
                <Button asChild variant={'accent'}>
                    <Link to="/events/create" className="bold">
                        Host an Event
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default CallToAction;
