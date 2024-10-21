import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import './EventsHeader.css';

const EventsHeader = () => {
    return (
        <div className="events-header">
            <h1 className="black">Events</h1>
            <p>
                Attend an event for our gymnasium with a ticket, or host an
                event yourself!
            </p>
            <p>
                <b>Disclaimer:</b> Our gym administrators have to verify your
                proposed event before it is final!
            </p>
            <div className="events-header__button-content">
                <Button asChild size={'sm'} variant={'accent'}>
                    <Link to="/" className="bold">
                        Host an Event
                    </Link>
                </Button>
                <Button asChild size={'sm'}>
                    <Link to="/" className="bold">
                        Purchase a Ticket
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default EventsHeader;
