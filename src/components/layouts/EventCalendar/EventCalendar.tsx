import { useMemo, useState } from 'react';
import {
    addMonths,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isToday,
    startOfMonth,
} from 'date-fns';

import { BREAKS } from '@/context/event-list';

import CalendarItem from './CalendarItem';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

import './EventCalendar.css';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface Event {
    id: string,
    date: Date;
    name: string;
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

    const isDateInRange = (date: Date) => {
        let selectedBreak;
        BREAKS.forEach((breakPeriod) => {
            if (date >= breakPeriod.startDate && date <= breakPeriod.endDate) {
                selectedBreak = breakPeriod;
            }
        });

        return selectedBreak;
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

                    const breakPeriod: any = isDateInRange(day);
                    const breakType = breakPeriod ? breakPeriod.type : '';

                    return (
                        <div
                            key={index}
                            className={clsx(
                                `event-calendar__day-container rounded-md p-2 day-status__${breakType}`,
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
                            {breakPeriod && (
                                <p className="day-status__text bold">
                                    {breakPeriod.name}
                                </p>
                            )}
                            {todaysEvents.length > 0 && (
                                <ul className="event-calendar__event-list">
                                    {todaysEvents.map((event) => {
                                        return (
                                            <CalendarItem
                                                id={event.id}
                                                name={event.name}
                                                location={event.location}
                                                startTime={event.startTime}
                                                endTime={event.endTime}
                                            />
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
