import {
    format,
    setHours,
    setMinutes,
    setSeconds,
    setMilliseconds,
} from 'date-fns';

import './BookingHeader.css';

const BookingHeader = (props: any) => {
    const formatTime = (time: Date) => {
        let dateForTime = new Date(0);
        dateForTime = setHours(dateForTime, time.getHours());
        dateForTime = setMinutes(dateForTime, time.getMinutes());
        dateForTime = setSeconds(dateForTime, 0);
        dateForTime = setMilliseconds(dateForTime, 0);

        return format(dateForTime, 'h:mm a');
    };

    return (
        <div className="booking-page__header">
            <h1 className="black">Booking Ticket for {props['name']}</h1>
            <p>{props['description']}</p>
            <p>
                Timings from{' '}
                <b>
                    {formatTime(props['startTime']) +
                        ' - ' +
                        formatTime(props['endTime'])}
                </b>
            </p>
            <p>
                Location: <b>{props['location']}</b>
            </p>
            <p>
                Ticket Cost: <b>{props['ticketCost'] === 0 ? 'FREE' : "$" + props['ticketCost']}</b>
            </p>
        </div>
    );
};

export default BookingHeader;
