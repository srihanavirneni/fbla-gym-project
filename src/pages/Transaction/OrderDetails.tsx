import { CONVENIENCE_FEE } from '@/context/event-list';
import Policies from '@/components/layouts/Policies/Policies';

import SeatChip from '../Booking/SeatChip';

import './OrderDetails.css';

const OrderDetails = (props: any) => {
    return (
        <div className="credit-card-page__order-details">
            <h2>Order Details</h2>
            {props.noSeats ? (
                <div className="order-details__pricing">
                    <div className="flex flex-row items-center">
                        <p className="medium mr-3">Entry Ticket</p>
                    </div>
                    <p className="bold">
                        {props['ticketCost'] <= 0
                            ? 'FREE'
                            : '$' + props['ticketCost']}
                    </p>
                </div>
            ) : (
                <>
                    {props['seats'].map((seat: any) => (
                        <div className="order-details__pricing">
                            <div className="flex flex-row items-center">
                                <p className="medium mr-3">Seat </p>
                                <SeatChip display seat={seat}></SeatChip>
                            </div>
                            <p className="bold">
                                {props['ticketCost'] <= 0
                                    ? 'FREE'
                                    : '$' + props['ticketCost']}
                            </p>
                        </div>
                    ))}
                </>
            )}
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
                        : '$' +
                          (props['ticketCost'] * props['seats'].length +
                              CONVENIENCE_FEE)}
                </p>
            </div>
            <Policies className={'order-details__policies'} showAmenities />
        </div>
    );
};

export default OrderDetails;
