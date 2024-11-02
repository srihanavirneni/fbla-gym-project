import EventsHeader from './EventsHeader';
import EventsList from '@/components/layouts/EventsList/EventsList';
import Policies from '@/components/layouts/Policies/Policies';

import { EVENT_DATA } from '@/context/event-list';

import './Events.css';

const Events = () => {
    return (
        <>
            <div className="events-page">
                <EventsHeader />
                <Policies />
                <EventsList items={EVENT_DATA} />
            </div>
        </>
    );
};

export default Events;
