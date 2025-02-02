import SeatSectionGroup from './SeatSectionGroup';
import './SeatMap.css';
const SeatMap = () => {
    return (
        <div className="seat-map">
            <SeatSectionGroup />
            <SeatSectionGroup />
            <SeatSectionGroup />
            <SeatSectionGroup />
        </div>
    );
};

export default SeatMap;
