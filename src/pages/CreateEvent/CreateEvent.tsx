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
            <EventCalendar />
        </div>
    );
};

export default CreateEvent;
