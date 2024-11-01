import EventsHeader from './EventsHeader';
import EventsList from '@/components/layouts/EventsList/EventsList';

import './Events.css';

const Events = () => {
    const ITEMS = [
        {
            id: 'e1',
            name: 'Homecoming Football Game',
            date: new Date(2024, 9, 21, 19, 0, 0, 0),
            type: 'Sports',
            location: 'Stadium',
            description:
                'Annual homecoming game between Lambert High School and South Forsyth High School',
            ticketCost: 20,
            eventOrganizers: 'LHS Athletics Department',
            specialNotes: 'Parking Lot A and B, masks encouraged',
            socialMedia: 'Facebook, Twitter',
        },
        {
            id: 'e2',
            name: 'Winter Dance',
            date: new Date(2024, 11, 10, 20, 0, 0, 0),
            type: 'Social',
            location: 'Main Gymnasium',
            description: 'Semi-formal dance for students, with live DJ',
            ticketCost: 35,
            eventOrganizers: 'LHS Student Council',
            specialNotes: 'Formal attire required, no re-entry policy',
            socialMedia: 'Instagram, Snapchat',
        },
        {
            id: 'e3',
            name: 'School Play: "Romeo & Juliet"',
            date: new Date(2024, 10, 15, 18, 0, 0, 0),
            type: 'Theater',
            location: 'Auditorium',
            description:
                "Drama club production of Shakespeare's classic, Romeo and Juliet.",
            ticketCost: 15,
            eventOrganizers: 'State Drama Council',
            specialNotes: 'Limited seating, early booking is advised',
            socialMedia: 'Facebook, Instagram',
        },
        {
            id: 'e4',
            name: 'Annual Science Fair',
            date: new Date(2025, 0, 24, 9, 0, 0, 0),
            type: 'Academic',
            location: 'Main Gymnasium',
            description:
                'Science fair featuring projects from students in grades K-12',
            ticketCost: 0, // free
            eventOrganizers: 'Science Club',
            specialNotes:
                'Parking in Lot A only! Drivers who park in Lot B will automatically be escorted out.',
            socialMedia: 'Facebook, Twitter',
        },
        {
            id: 'e5',
            name: 'Holiday Charity Concert',
            date: new Date(2024, 11, 18, 19, 30, 0, 0),
            type: 'Music',
            location: 'Auditorium',
            description:
                'Holiday concert with performances by the school choir!',
            ticketCost: 20,
            eventOrganizers: 'LHS Music Department',
            specialNotes: 'Donations for charity are accepted.',
            socialMedia: 'Facebook, Twitter',
        },
    ];

    return (
        <>
            <div className="events-page">
                <EventsHeader />
                <EventsList items={ITEMS} />
            </div>
        </>
    );
};

export default Events;
