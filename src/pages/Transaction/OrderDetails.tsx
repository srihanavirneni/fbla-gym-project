import { CONVENIENCE_FEE } from '@/context/event-list';
import Policies from '@/components/layouts/Policies/Policies';

import './OrderDetails.css';

const OrderDetails = (props: any) => {
    return (
        <div className="credit-card-page__order-details">
            <h2>Order Details</h2>
            <div className="order-details__pricing">
                <p className="medium">Seat X Ticket</p>
                <p className="bold">
                    {props['ticketCost'] <= 0
                        ? 'FREE'
                        : '$' + props['ticketCost']}
                </p>
            </div>
            {props['ticketCost'] > 0 && (
                <div className="order-details__pricing">
                    <p className="medium">Convenience Fee</p>
                    <p className="bold">${CONVENIENCE_FEE}</p>
                </div>
            )}
            <hr />
            <div className="order-details__pricing-final">
                <p className="bold">Total</p>
                <p className="black">
                    {props['ticketCost'] <= 0
                        ? 'FREE'
                        : '$' + (props['ticketCost'] + CONVENIENCE_FEE)}
                </p>
            </div>
            <Policies className={'order-details__policies'} showAmenities />
        </div>
    );
};

export default OrderDetails;
