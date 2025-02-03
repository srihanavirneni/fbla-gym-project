import { SEATS_PER_ROW, ROWS } from '@/context/event-list';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Button } from '@/components/ui/button';
import Legend from './Legend';
import Seat from './Seat';

import './SeatList.css';

const SeatList = (props: any) => {
    return (
        <div className="seat-list__big-container">
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
                                { length: SEATS_PER_ROW },
                                (_, seatIndex) => (
                                    <Seat
                                        seatIndex={seatIndex}
                                        rowIndex={rowIndex}
                                        section={props.section}
                                        takenSeats={props.takenSeats}
                                        onSeatToggle={props.onSeatToggle}
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
