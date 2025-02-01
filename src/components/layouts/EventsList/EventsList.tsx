import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

import Combobox from '@/components/interface/Combobox';
import EventItem from './EventItem';

import './EventsList.css';

const EmptyList = () => {
    return (
        <div className="events-list__fail">
            <h1 className="black">No events at the moment!</h1>
            <p>Why not host one?</p>
            <Button asChild variant={'accent'} size={'sm'}>
                <Link to="/events/create">Host an Event</Link>
            </Button>
        </div>
    );
};

const EventsList = (props: any) => {
    if (props.items.length === 0) {
        return <EmptyList />;
    }

    const [events, _] = React.useState(props.items);
    const [query, setQuery] = React.useState('');
    const [comboboxQuery, setComboboxQuery] = React.useState('');

    const filteredEvents = React.useMemo(() => {
        const searchQuery = query.toLowerCase();
        const comboQuery = comboboxQuery.toLowerCase();

        const filteredComboQuery =
            comboQuery === ''
                ? events
                : events.filter((event: any) => {
                      return event.type.toLowerCase().includes(comboQuery);
                  });

        return filteredComboQuery.filter((event: any) => {
            return event.name.toLowerCase().includes(searchQuery);
        });
    }, [events, query, comboboxQuery]);

    return (
        <div>
            <div className="events-list__search-bar">
                <Combobox
                    labelPlaceholder="Select category"
                    placeholder="Search categories"
                    className="search-bar__combo-box"
                    onChange={(v: any) => {
                        setComboboxQuery(v);
                    }}
                    items={[
                        {
                            value: 'sports',
                            label: 'Sports',
                        },
                        {
                            value: 'social',
                            label: 'Social',
                        },
                        {
                            value: 'theater',
                            label: 'Theater',
                        },
                        {
                            value: 'academic',
                            label: 'Academic',
                        },
                        {
                            value: 'music',
                            label: 'Music',
                        },
                        {
                            value: 'arts',
                            label: 'Arts',
                        },
                        {
                            value: 'community service',
                            label: 'Community Service',
                        },
                        {
                            value: 'entertainment',
                            label: 'Entertainment',
                        },
                        {
                            value: 'market',
                            label: 'Market',
                        },
                        {
                            value: 'technology',
                            label: 'Technology',
                        },
                        {
                            value: 'festival',
                            label: 'Festival',
                        },
                    ]}
                />
                <Input
                    placeholder="Search For Events"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="search"
                />
            </div>
            <ul className="events-list">
                {filteredEvents.length ? (
                    filteredEvents.map((event: any) => (
                        <EventItem
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            date={event.date}
                            startTime={event.startTime}
                            endTime={event.endTime}
                            type={event.type}
                            location={event.location}
                            ticketCost={event.ticketCost}
                            description={event.description}
                            eventOrganizers={event.eventOrganizers}
                            specialNotes={event.specialNotes}
                            socialMedia={event.socialMedia}
                        />
                    ))
                ) : (
                    <EmptyList />
                )}
            </ul>
        </div>
    );
};

export default EventsList;
