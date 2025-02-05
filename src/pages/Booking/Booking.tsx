import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EVENT_DATA, MAX_TICKETS_PER_PURCHASE } from '@/context/event-list';

import { Button } from '@/components/ui/button';

import GymSeatMap from '@/components/layouts/SeatMap/Gymnasium/GymSeatMap';
import AuditoriumSeatMap from '@/components/layouts/SeatMap/Auditorium/AuditoriumSeatMap';

import SeatChip from './SeatChip';
import BookingError from './BookingError';
import BookingHeader from './BookingHeader';

import './Booking.css';

const Booking = () => {
    const params = useParams();

    const currentId = params.id;
    const currentPath = params.path;

    console.log(currentPath);

    let eventData;

    EVENT_DATA.forEach((event: any) => {
        if (event.id === currentId) {
            eventData = event;
        }
    });

    const [recommendedSeatsList, setRecommendedSeatsList] = useState<String[]>(
        []
    );

    const pushSeat = (seatName: String, selected: boolean) => {
        if (!selected) {
            setRecommendedSeatsList([...recommendedSeatsList, seatName]);
        } else {
            setRecommendedSeatsList(
                recommendedSeatsList.filter((seat) => seat !== seatName)
            );
        }
    };

    const removeSeat = (seatName: String) => {
        setRecommendedSeatsList(
            recommendedSeatsList.filter((seat) => seat !== seatName)
        );
    };

    return eventData ? (
        <div className="booking-page">
            <BookingHeader
                name={eventData['name']}
                description={eventData['description']}
                startTime={eventData['startTime']}
                endTime={eventData['endTime']}
                location={eventData['location']}
                ticketCost={eventData['ticketCost']}
            />
            <div className="booking-page__content">
                <div className="booking-page__ticket-selection">
                    <h1 className="black">Pick A Seat</h1>
                    <p className="medium mb-10">
                        You cannot select seats that are taken. Ticket prices
                        are flat no matter where you sit.
                    </p>
                    <div className="seat-list__seat-input">
                        <h3>Seats</h3>
                        <p className="mt-1 mb-1 text-sm">
                            Selected seats will show at the bottom. Click
                            continue to purchase these tickets.
                        </p>
                        <p className="mt-1 mb-4 text-sm">
                            Maximum of <b>{MAX_TICKETS_PER_PURCHASE} tickets</b>{' '}
                            per purchase.
                        </p>
                        <div className="recommended-seats-window">
                            {recommendedSeatsList.map((seat) => {
                                return (
                                    <SeatChip
                                        seat={seat}
                                        onRemove={() => removeSeat(seat)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <Button
                        variant={'accent'}
                        disabled={recommendedSeatsList.length === 0}
                        asChild={recommendedSeatsList.length !== 0}
                        className="booking-page__continue-btn"
                    >
                        <Link
                            to={`/events/payment/${currentId}/transaction/${recommendedSeatsList.join(
                                'b'
                            )}`}
                            className="text-white"
                        >
                            Continue
                        </Link>
                    </Button>
                    <Button variant={'outline'} asChild className="ml-3">
                        <Link
                            to={'/events/'}
                            className="text-black booking-page__back-btn bg-secondary"
                        >
                            Back
                        </Link>
                    </Button>
                </div>
                <div className="booking-page__seat-list">
                    {eventData['location'] === 'Auditorium' ? (
                        <AuditoriumSeatMap
                            id={currentId}
                            path={currentPath}
                            takenSeats={eventData['takenSeats']}
                            onSeatToggle={pushSeat}
                        />
                    ) : (
                        <GymSeatMap
                            id={currentId}
                            path={currentPath}
                            takenSeats={eventData['takenSeats']}
                            onSeatToggle={pushSeat}
                            location={eventData['location']}
                        />
                    )}
                </div>
            </div>
        </div>
    ) : (
        <BookingError />
    );
};

export default Booking;
