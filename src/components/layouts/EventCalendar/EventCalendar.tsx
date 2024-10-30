import { useMemo, useState } from 'react';
import {
    addMonths,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isToday,
    setHours,
    setMilliseconds,
    setMinutes,
    setSeconds,
    startOfMonth,
} from 'date-fns';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

import './EventCalendar.css';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface Event {
    date: Date;
    title: string;
    location: string;
    startTime: Date;
    endTime: Date;
}

interface EventCalendarProps {
    events: Event[];
}

const EventCalendar = ({ events }: EventCalendarProps) => {
    const currentDate = new Date();
    const [focusDate, setFocusDate] = useState(currentDate);

    const firstDayOfMonth = startOfMonth(focusDate);
    const lastDayOfMonth = endOfMonth(focusDate);
    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    });

    const startingDayIndex = getDay(firstDayOfMonth);

    const eventsByDate = useMemo(() => {
        return events.reduce((acc: { [key: string]: Event[] }, event) => {
            const dateKey = format(event.date, 'yyyy-MM-dd');
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(event);
            return acc;
        }, {});
    }, [events]);

    const formatTime = (time: Date) => {
        let dateForTime = new Date(0);
        dateForTime = setHours(dateForTime, time.getHours());
        dateForTime = setMinutes(dateForTime, time.getMinutes());
        dateForTime = setSeconds(dateForTime, 0);
        dateForTime = setMilliseconds(dateForTime, 0);

        return format(dateForTime, 'h:mm a');
    };

    const navigate = (direction: number) => {
        setFocusDate(addMonths(focusDate, direction));
    };

    return (
        <div className="event-calendar pt-10 px-2">
            <div className="event-calendar__header mb-7 black">
                <h2>{format(focusDate, 'MMMM yyyy')}</h2>
                <div>
                    <Button
                        variant={'secondary'}
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant={'secondary'}
                        onClick={() => {
                            navigate(1);
                        }}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="event-calendar__grid grid grid-cols-7 gap-2">
                {WEEKDAYS.map((day: any) => {
                    return (
                        <div key={day} className="bold text-center mt-3 mb-10">
                            {day}
                        </div>
                    );
                })}
                {Array.from({ length: startingDayIndex }).map((_, index) => {
                    return (
                        <div
                            key={`empty-${index}`}
                            className="rounded-md p-2 text-center"
                        />
                    );
                })}
                {daysInMonth.map((day, index) => {
                    const dateKey = format(day, 'yyyy-MM-dd');
                    const todaysEvents = eventsByDate[dateKey] || [];

                    return (
                        <div
                            key={index}
                            className={clsx(
                                'event-calendar__day-container rounded-md p-2',
                                {
                                    'event-calendar__empty-day':
                                        todaysEvents.length <= 0,
                                }
                            )}
                        >
                            <div
                                className={`${
                                    isToday(day) &&
                                    'event-calendar__today black'
                                }`}
                            >
                                {format(day, 'd')}
                            </div>
                            {todaysEvents.length > 0 && (
                                <ul className="event-calendar__event-list">
                                    {todaysEvents.map((event) => {
                                        return (
                                            <li key={event.title}>
                                                <div>
                                                    <h4>{event.title}</h4>
                                                    <p>{event.location}</p>
                                                    <p>
                                                        {formatTime(
                                                            event.startTime
                                                        ) +
                                                            ' - ' +
                                                            formatTime(
                                                                event.endTime
                                                            )}
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EventCalendar;
