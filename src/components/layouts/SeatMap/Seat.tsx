import { useState } from 'react';
import './Seat.css';

const Seat = (props: any) => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rowsAuditorium = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    const [selected, setSelected] = useState(false);

    const auditoriumSeatName = `${props.section}${
        rowsAuditorium[props.rowIndex]
    }${props.seatIndex + 1}`;
    const gymSeatName = `${props.section}${
        props.section == 2 || props.section == 4
            ? rows[props.rowIndex]
            : rows[rows.length - props.rowIndex - 1]
    }${props.seatIndex + 1}`;

    const seatName = props.auditorium ? auditoriumSeatName : gymSeatName;

    const isSeatTaken = (seat: string) => {
        for (let i = 0; i < props.takenSeats.length; i++) {
            if (props.takenSeats[i] === seat) {
                return true;
            }
        }
        return false;
    };

    const selectSeat = () => {
        const success = props.onSeatToggle2(seatName, !selected);
        if (success === true) {
            if (!isSeatTaken(seatName)) {
                setSelected(!selected);
                props.onSeatToggle(seatName, selected);
            }
        }
    };

    return (
        <div
            key={props.seatIndex + 1}
            className={`seat ${isSeatTaken(seatName) ? 'seat-taken' : ''} ${
                selected ? 'seat-selected' : ''
            }`}
            onClick={selectSeat}
        >
            <p className="bold">{seatName}</p>
        </div>
    );
};

export default Seat;
