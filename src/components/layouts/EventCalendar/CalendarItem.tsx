import { Link } from 'react-router-dom';
import {
    format,
    setHours,
    setMilliseconds,
    setMinutes,
    setSeconds,
} from 'date-fns';

import './CalendarItem.css';

const CalendarItem = (props: any) => {
    const formatTime = (time: Date) => {
        let dateForTime = new Date(0);
        dateForTime = setHours(dateForTime, time.getHours());
        dateForTime = setMinutes(dateForTime, time.getMinutes());
        dateForTime = setSeconds(dateForTime, 0);
        dateForTime = setMilliseconds(dateForTime, 0);

        return format(dateForTime, 'h:mm a');
    };

    return (
        <li key={props.name} className="event-calendar__item">
            <Link to={`/events/payment/${props.id}`}>
                <h4>{props.name}</h4>
                <p>{props.location}</p>
                <p>
                    {formatTime(props.startTime) +
                        ' - ' +
                        formatTime(props.endTime)}
                </p>
            </Link>
        </li>
    );
};

export default CalendarItem;
