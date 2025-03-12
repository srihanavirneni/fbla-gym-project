import EventCalendar from '@/components/layouts/EventCalendar/EventCalendar';
import CalendarKey from './CalendarKey';

import { EVENT_DATA } from '@/context/event-list';
import './Calendar.css';

const Calendar = () => {
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

            <CalendarKey />
            <div className="calendar-page__main-content pt-5 pb-5">
                <EventCalendar events={EVENT_DATA} />
            </div>
        </div>
    );
};

export default Calendar;
