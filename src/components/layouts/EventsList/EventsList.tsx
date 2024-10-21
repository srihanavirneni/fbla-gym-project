import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import EventItem from './EventItem';

import './EventsList.css';

const EventsList = (props: any) => {
    if (props.items.length === 0) {
        return (
            <div className="events-list__fail">
                <h1 className="black">No events at the moment!</h1>
                <p>Why not host one?</p>
                <Button asChild variant={'accent'} size={'sm'}>
                    <Link to="/">Host an Event</Link>
                </Button>
            </div>
        );
    }
    return (
        <ul className="events-list">
            {props.items.map((event: any) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    name={event.name}
                    date={event.date}
                    type={event.type}
                    location={event.location}
                    ticketCost={event.ticketCost}
                    description={event.description}
                    eventOrganizers={event.eventOrganizers}
                    specialNotes={event.specialNotes}
                    socialMedia={event.socialMedia}
                />
            ))}
        </ul>
    );
};

export default EventsList;
