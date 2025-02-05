import {
    SEATS_PER_ROW,
    SEATS_PER_ROW_SIDE,
    MAX_TICKETS_PER_PURCHASE,
    ROWS,
} from '@/context/event-list';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Button } from '@/components/ui/button';
import Legend from '../Legend';
import Seat from '../Seat';

import './SeatList.css';

const SeatList = (props: any) => {
    const getSectionName = () => {
        if (props.section === '1') {
            return 'Freshmen';
        } else if (props.section === '2') {
            return 'Sophomore';
        } else if (props.section === '3') {
            return 'Junior';
        } else if (props.section === '4') {
            return 'Senior';
        }
    };

    const isSide = () => {
        if (props.section === '3' || props.section === '4') {
            return true;
        }
        return false;
    };

    const [selectedSeats, setSelectedSeats] = useState<String[]>([]);
    const pushSeat = (seatName: String, selected: boolean) => {
        if (selected) {
            if (selectedSeats.length >= MAX_TICKETS_PER_PURCHASE) {
                return false;
            }

            setSelectedSeats([...selectedSeats, seatName]);
        } else {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatName));
        }

        return true;
    };

    return (
        <div className="seat-list__big-container">
            <h1 className="mb-0">
                Section {props.section}: {getSectionName()} Rank
            </h1>
            <Button asChild variant={'outline'}>
                <Link to={`/events/payment/${props.eventId}`}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back
                </Link>
            </Button>
            <Legend />
            <div
                className={`seat-list__container ${
                    props.section > 2 && 'container-court'
                }`}
            >
                {props.section % 2 == 0 && <h1>COURT</h1>}
                <div className={`seat-list ${props.side}`}>
                    {Array.from({ length: ROWS }, (_, rowIndex) => (
                        <div key={rowIndex} className="seat-row">
                            {Array.from(
                                {
                                    length: isSide()
                                        ? SEATS_PER_ROW_SIDE
                                        : SEATS_PER_ROW,
                                },
                                (_, seatIndex) => (
                                    <Seat
                                        seatIndex={seatIndex}
                                        rowIndex={rowIndex}
                                        section={props.section}
                                        takenSeats={props.takenSeats}
                                        onSeatToggle={props.onSeatToggle}
                                        onSeatToggle2={pushSeat}
                                    />
                                )
                            )}
                        </div>
                    ))}
                </div>
                {props.section % 2 == 1 && <h1>COURT</h1>}
            </div>
        </div>
    );
};

export default SeatList;
