import { useState } from 'react';
import {
    AUDITORIUM_SEATS_PER_ROW,
    AUDITORIUM_SEATS_PER_ROW_SIDE,
    AUDITORIUM_ROWS,
    MAX_TICKETS_PER_PURCHASE,
} from '@/context/event-list';

import Seat from '@/components/layouts/SeatMap/Seat';
import './SeatList.css';

const SeatList = (props: any) => {
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
        <div className={`auditorium-seat-list ${props.className}`}>
            {Array.from({ length: AUDITORIUM_ROWS }, (_, rowIndex) => (
                <div key={rowIndex} className="auditorium-seat-row">
                    {Array.from(
                        {
                            length: props.side
                                ? AUDITORIUM_SEATS_PER_ROW_SIDE
                                : AUDITORIUM_SEATS_PER_ROW,
                        },
                        (_, seatIndex) => (
                            <Seat
                                seatIndex={seatIndex}
                                rowIndex={rowIndex}
                                section={props.section}
                                takenSeats={props.takenSeats}
                                onSeatToggle={props.onSeatToggle}
                                onSeatToggle2={pushSeat}
                                auditorium
                            />
                        )
                    )}
                </div>
            ))}
        </div>
    );
};

export default SeatList;
