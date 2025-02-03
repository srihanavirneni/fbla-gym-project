import { Link } from 'react-router-dom';
import './SeatSectionGroup.css';

const SeatSectionGroup = (props: any) => {
    const getSectionName = () => {
        if (props.section === 1) {
            return 'Freshmen';
        } else if (props.section === 2) {
            return 'Sophomore';
        } else if (props.section === 3) {
            return 'Junior';
        } else if (props.section === 4) {
            return 'Senior';
        }
    };

    return (
        <Link to={`/events/payment/${props.id}/${props.section}`}>
            <button className={`section-group ${props.side}`}>
                <h1 className="bold">{getSectionName()}</h1>
            </button>
        </Link>
    );
};

export default SeatSectionGroup;
