import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import './SeatChip.css';

const SeatChip = (props: any) => {
    return (
        <div className="seat-chip bold">
            <button>
                <FontAwesomeIcon icon={faX} />
            </button>
            <p>{props.seat}</p>
        </div>
    );
};

export default SeatChip;
