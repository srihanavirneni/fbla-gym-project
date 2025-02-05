import SeatList from './SeatList';
import Legend from '@/components/layouts/SeatMap/Legend';

import './AuditoriumSeatMap.css';

const AuditoriumSeatMap = (props: any) => {
    return (
        <div className="auditorium-seat-map">
            <Legend />
            <div className="stage">
                <h1>STAGE</h1>
            </div>
            <div className="auditorium-seats">
                <SeatList
                    className="auditorium-seat-list-1"
                    side={true}
                    onSeatToggle={props.onSeatToggle}
                    takenSeats={props.takenSeats}
                    section={1}
                />
                <SeatList
                    className="auditorium-seat-list-2"
                    side={false}
                    onSeatToggle={props.onSeatToggle}
                    takenSeats={props.takenSeats}
                    section={2}
                />
                <SeatList
                    className="auditorium-seat-list-3"
                    side={true}
                    onSeatToggle={props.onSeatToggle}
                    takenSeats={props.takenSeats}
                    section={3}
                />
            </div>
        </div>
    );
};

export default AuditoriumSeatMap;
