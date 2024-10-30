import { subDays, addDays } from 'date-fns';

import EventCalendar from '@/components/layouts/EventCalendar/EventCalendar';
import './CreateEvent.css';

const CreateEvent = () => {
    return (
        <div className="create-event">
            <div className="create-event__header">
                <h1 className="black">Host an Event</h1>
                <p>
                    Our staff will verify your event and will get back to you
                    shortly! Once your event has been approved, it will be
                    booked.
                </p>
                <p>
                    <b>Disclaimer: </b>Don't expect us to immediately approve
                    your event.
                </p>
            </div>
            <div className='create-event__main-content'>
                <div className="create-event__calendar-container">
                    <EventCalendar
                        events={[
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
                                date: addDays(new Date(), 0),
                                title: 'Annual Science Fair',
                                location: 'Main Gymnasium',
                                startTime: new Date('1970-01-01T17:00:00'),
                                endTime: new Date('1970-01-01T19:00:00'),
                            },
                        ]}
                    />
                </div>
                <div className="create-event__main-form">
                    <h3>HEY</h3>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
