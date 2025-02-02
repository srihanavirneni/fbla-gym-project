import { useParams } from 'react-router-dom';
import { EVENT_DATA } from '@/context/event-list';

import BookingHeader from '../Booking/BookingHeader';
import BookingError from '../Booking/BookingError';

import './Transaction.css';

const Transaction = () => {
    const params = useParams();

    const currentId = params.id;
    let eventData;

    EVENT_DATA.forEach((event: any) => {
        if (event.id === currentId) {
            eventData = event;
        }
    });

    return eventData ? (
        <div className='transaction'>
            <BookingHeader
                name={eventData['name']}
                description={eventData['description']}
                startTime={eventData['startTime']}
                endTime={eventData['endTime']}
            />
            <div className='transaction-content'>
                
            </div>
        </div>
    ) : (
        <BookingError />
    );
};

export default Transaction;
