import EventsHeader from './EventsHeader';
import EventsList from '@/components/layouts/EventsList/EventsList';

import { EVENT_DATA } from '@/context/event-list';

import './Events.css';

const Events = () => {
    return (
        <>
            <div className="events-page">
                <EventsHeader />
                <EventsList items={EVENT_DATA} />
            </div>
        </>
    );
};

export default Events;
