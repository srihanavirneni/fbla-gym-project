import { useParams } from 'react-router-dom';
import { EVENT_DATA, CONVENIENCE_FEE } from '@/context/event-list';

import BookingHeader from '../Booking/BookingHeader';
import BookingError from '../Booking/BookingError';

import CreditCardPayment from './CreditCardPayment';
import OrderDetails from './OrderDetails';

import PurchaseStrip from './PurchaseStrip';

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
        <div className="transaction">
            <BookingHeader
                name={eventData['name']}
                description={eventData['description']}
                startTime={eventData['startTime']}
                endTime={eventData['endTime']}
            />
            <div className="transaction-content">
                <CreditCardPayment />
                <OrderDetails
                    ticketCost={eventData['ticketCost']}
                    convenienceFee={CONVENIENCE_FEE}
                />
            </div>
            <PurchaseStrip total={eventData['ticketCost'] + CONVENIENCE_FEE} />
        </div>
    ) : (
        <BookingError />
    );
};

export default Transaction;
