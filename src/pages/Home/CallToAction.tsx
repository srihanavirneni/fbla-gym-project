import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import './CallToAction.css';

const CallToAction = () => {
    return (
        <div className="home__cta">
            <h1 className="black">What are you waiting for?</h1>
            <p>
                Don't miss an opportunity and <b>Reserve a Date today!</b>
            </p>
            <Button asChild variant={'accent'} size={'sm'}>
                <Link to="/events/create">Host an Event</Link>
            </Button>
        </div>
    );
};

export default CallToAction;
