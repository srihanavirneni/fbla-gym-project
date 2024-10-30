import { subDays, addDays } from 'date-fns';

import EventCalendar from '@/components/layouts/EventCalendar/EventCalendar';
import './Calendar.css';

const Calendar = () => {
    const EVENTS = [
        {
            date: subDays(new Date(), 6),
            title: 'Homecoming Football Game',
            location: 'Stadium',
            startTime: new Date('1970-01-01T14:00:00'),
            endTime: new Date('1970-01-01T15:00:00'),
        },
        {
            date: subDays(new Date(), 1),
            title: 'Winter Dance',
            location: 'Main Gymnasium',
            startTime: new Date('1970-01-01T14:00:00'),
            endTime: new Date('1970-01-01T15:00:00'),
        },
        {
            date: addDays(new Date(), 0),
            title: 'School Play: Romeo & Juliet',
            location: 'Auditorium',
            startTime: new Date('1970-01-01T14:00:00'),
            endTime: new Date('1970-01-01T15:00:00'),
        },
        {
            date: addDays(new Date(), 10),
            title: 'Annual Science Fair',
            location: 'Main Gymnasium',
            startTime: new Date('1970-01-01T17:00:00'),
            endTime: new Date('1970-01-01T19:00:00'),
        },
    ];

    return (
        <div className="calendar-page">
            <div className="calendar-page__header">
                <h1 className="black">Current Dates</h1>
                <p>
                    Once you figured out a date for you to host your event, you
                    can book your reservation.
                </p>
                <p>
                    Please note that times will not be available for events that
                    have already been scheduled!
                </p>
            </div>
            <div className="calendar-page__main-content pt-5 pb-5">
                <EventCalendar events={EVENTS} />
            </div>
        </div>
    );
};

export default Calendar;
