import { Link } from 'react-router-dom';
import './SeatSectionGroup.css';

const SeatSectionGroup = (props: any) => {
    return (
        <Link to={`/events/payment/${props.id}/${props.section}`}>
            <button className={`section-group ${props.side}`}>
                <h1 className="black text-4xl">{props.section}</h1>
            </button>
        </Link>
    );
};

export default SeatSectionGroup;
