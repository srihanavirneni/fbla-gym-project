import SeatSectionGroup from './SeatSectionGroup';
import SeatList from './SeatList';

import './GymSeatMap.css';

const GymSeatMap = (props: any) => {
    const getLocationName = () => {
        if (props.location === 'Main Field') {
            return 'FIELD';
        } else if (props.location === 'STADIUM') {
            return 'FIELD';
        }

        return 'COURT';
    };

    return props.path > 0 ? (
        <div className="seat-group__container">
            <SeatList
                section={props.path}
                takenSeats={props.takenSeats}
                eventId={props.id}
                onSeatToggle={props.onSeatToggle}
                side={
                    props.path === '1' || props.path === '2'
                        ? 'horizontal'
                        : 'vertical'
                }
            />
        </div>
    ) : (
        <div className="seat-map">
            <p className="black mb-5">
                Click on a section to view seats
            </p>
            <div className="seat-map__top">
                <SeatSectionGroup side="horizontal" id={props.id} section={1} />
            </div>
            <div className="seat-map__middle">
                <SeatSectionGroup side="vertical" id={props.id} section={3} />
                <div className="stadium">
                    <h1>{getLocationName()}</h1>
                </div>
                <SeatSectionGroup side="vertical" id={props.id} section={4} />
            </div>
            <div className="seat-map__bottom">
                <SeatSectionGroup side="horizontal" id={props.id} section={2} />
            </div>
        </div>
    );
};

export default GymSeatMap;
