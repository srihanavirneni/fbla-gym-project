import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EVENT_DATA } from '@/context/event-list';

import Combobox from '@/components/interface/Combobox';
import { Button } from '@/components/ui/button';

import SeatChip from './SeatChip';
import BookingError from './BookingError';
import BookingHeader from './BookingHeader';

import stadium from '@/assets/images/stadium.png';
import './Booking.css';

const Booking = () => {
    const params = useParams();

    const currentId = params.id;
    let eventData;

    EVENT_DATA.forEach((event: any) => {
        if (event.id === currentId) {
            eventData = event;
        }
    });

    const [section, setSection] = useState(1);
    const [row, setRow] = useState('A');
    const [quantity, setQuantity] = useState(1);

    const [recommendedSeatsList, setRecommendedSeatsList] = useState<String[]>(
        []
    );

    function getRandomInt(min: number, max: number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    const setQuery = (queryName: String, value: any) => {
        if (queryName == 'section') {
            setSection(value);
        } else if (queryName == 'row') {
            setRow(value);
        } else if (queryName == 'quantity') {
            setQuantity(value);
        }

        setRecommendedSeatsList(['1A32', '1A33']);
    };

    return eventData ? (
        <div className="booking-page">
            <BookingHeader
                name={eventData['name']}
                description={eventData['description']}
                startTime={eventData['startTime']}
                endTime={eventData['endTime']}
            />
            <div className="booking-page__content">
                <div className="booking-page__seat-list">
                    <h1 className="black">Pick A Seat</h1>
                    <p className="medium mb-10">
                        Seats for the Stadium range from 100 to 400; ticket
                        prices are flat no matter where you sit.
                    </p>
                    <img src={stadium} alt="stadium" />
                </div>
                <div className="booking-page__ticket-selection">
                    <div className="seat-list__seat-input">
                        <h3>Section</h3>
                        <p className="mt-1 mb-4 text-sm">
                            There are a total of 4 sections surrounding the
                            basketball court.
                        </p>
                        <Combobox
                            labelPlaceholder="Select Section"
                            placeholder="Search Section"
                            className="search-bar__combo-box seat-input__combo-box"
                            onChange={(v: any) => {
                                setQuery('section', v);
                            }}
                            items={[
                                {
                                    value: '1',
                                    label: 'Section 1: Freshmen',
                                },
                                {
                                    value: '2',
                                    label: 'Section 2: Sophomore',
                                },
                                {
                                    value: '3',
                                    label: 'Section 3: Junior',
                                },
                                {
                                    value: '4',
                                    label: 'Section 4: Senior',
                                },
                            ]}
                        />
                    </div>
                    <div className="seat-list__seat-input">
                        <h3>Row Number</h3>
                        <p className="mt-1 text-sm">
                            Each section has a row from A to H
                        </p>
                        <p className="bold mb-4 text-sm">
                            A is the closest, H is the farthest.
                        </p>
                        <Combobox
                            labelPlaceholder="Select Row"
                            placeholder="Search Row"
                            className="search-bar__combo-box seat-input__combo-box"
                            onChange={(v: any) => {
                                setQuery('row', v);
                            }}
                            items={[
                                {
                                    value: 'A',
                                    label: 'Row A',
                                },
                                {
                                    value: 'B',
                                    label: 'Row B',
                                },
                                {
                                    value: 'C',
                                    label: 'Row C',
                                },
                                {
                                    value: 'D',
                                    label: 'Row D',
                                },
                                {
                                    value: 'E',
                                    label: 'Row E',
                                },
                                {
                                    value: 'F',
                                    label: 'Row F',
                                },
                                {
                                    value: 'G',
                                    label: 'Row G',
                                },
                                {
                                    value: 'H',
                                    label: 'Row H',
                                },
                            ]}
                        />
                    </div>
                    <div className="seat-list__seat-input">
                        <h3>Ticket Quantity</h3>
                        <p className="mt-1 mb-4 text-sm">
                            Select from 1 Ticket to 6 Tickets
                        </p>
                        <Combobox
                            labelPlaceholder="Select Quantity"
                            placeholder="Search Ticket Quantity"
                            className="search-bar__combo-box seat-input__combo-box"
                            onChange={(v: any) => {
                                setQuery('quantity', v);
                            }}
                            items={[
                                {
                                    value: '1',
                                    label: '1 Ticket',
                                },
                                {
                                    value: '2',
                                    label: '2 Tickets',
                                },
                                {
                                    value: '3',
                                    label: '3 Tickets',
                                },
                                {
                                    value: '4',
                                    label: '4 Tickets',
                                },
                                {
                                    value: '5',
                                    label: '5 Tickets',
                                },
                                {
                                    value: '6',
                                    label: '6 Tickets',
                                },
                            ]}
                        />
                    </div>
                    <div className="seat-list__seat-input">
                        <h3>Seats</h3>
                        <p className="mt-1 mb-4 text-sm">
                            Selected seats will show at the bottom. Click
                            continue to purchase these tickets.
                        </p>
                        <div className="recommended-seats-window">
                            {recommendedSeatsList.map((seat) => {
                                return <SeatChip seat={seat} />;
                            })}
                        </div>
                    </div>
                    <Button
                        variant={'accent'}
                        disabled={recommendedSeatsList.length === 0}
                        asChild={recommendedSeatsList.length !== 0}
                    >
                        <Link
                            to={`/events/payment/${currentId}/transaction/${recommendedSeatsList.join('b')}`}
                            className="text-white"
                        >
                            Continue
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    ) : (
        <BookingError />
    );
};

export default Booking;
