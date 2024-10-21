import { ScheduleXCalendar, useCalendarApp } from '@schedule-x/react';
import { createViewWeek } from '@schedule-x/calendar';
import { createCurrentTimePlugin } from '@schedule-x/current-time';
import '@schedule-x/theme-default/dist/calendar.css';

import './EventCalendar.css';

const EventCalendar = () => {
    const calendar = useCalendarApp({
        views: [createViewWeek()],
        events: [
            {
                id: 1,
                title: 'My new event',
                start: '2024-10-21 00:00',
                end: '2024-10-21 02:00',
            },
        ],
        plugins: [
            createCurrentTimePlugin()
        ]
    });

    return (
        <div className="event-calendar">
            <ScheduleXCalendar calendarApp={calendar} />
        </div>
    );
};

export default EventCalendar;
