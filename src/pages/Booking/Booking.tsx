import { Link, useParams } from 'react-router-dom';
import { EVENT_DATA, CONVENIENCE_FEE } from '@/context/event-list';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
    format,
    setHours,
    setMinutes,
    setSeconds,
    setMilliseconds,
} from 'date-fns';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import PurchaseStrip from './PurchaseStrip';
import Policies from '@/components/layouts/Policies/Policies';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCcAmazonPay,
    faCcApplePay,
    faCcPaypal,
    faGooglePay,
} from '@fortawesome/free-brands-svg-icons';

import stadium from '@/assets/images/stadium.png';
import './Booking.css';

const Booking = () => {
    const params = useParams();

    const currentId = params.id;
    let eventData;

    EVENT_DATA.forEach((event: any) => {
        if (event.id === currentId) {
            eventData = event;
        }
    });

    const formatTime = (time: Date) => {
        let dateForTime = new Date(0);
        dateForTime = setHours(dateForTime, time.getHours());
        dateForTime = setMinutes(dateForTime, time.getMinutes());
        dateForTime = setSeconds(dateForTime, 0);
        dateForTime = setMilliseconds(dateForTime, 0);

        return format(dateForTime, 'h:mm a');
    };

    return eventData ? (
        <div className="booking-page">
            <div className="booking-page__header">
                <h1 className="black">
                    Booking Ticket for {eventData['name']}
                </h1>
                <p>{eventData['description']}</p>
                <p>
                    Timings from{' '}
                    <b>
                        {formatTime(eventData['startTime']) +
                            ' - ' +
                            formatTime(eventData['endTime'])}
                    </b>
                </p>
            </div>
            <div className="booking-page__seat-list">
                <img src={stadium} alt="stadium" />
                <h1 className="black">Pick A Seat</h1>
                <p className="medium">
                    Seats for the Stadium range from 100 to 300; ticket prices
                    are flat no matter where you sit.
                </p>
                <div className="seat-list__seat-input">
                    <p>Type Seat Number</p>
                    <Input placeholder="Number from 100 to 300" type="number" />
                </div>
            </div>
            <hr />
            <div className="credit-card-page">
                <div className="credit-card-page__info">
                    <Card className="credit-card-page__info-card">
                        <CardHeader>
                            <CardTitle className="black">
                                Purchase Ticket
                            </CardTitle>
                            <CardDescription>
                                <p className="mt-2">
                                    Fill out the following information to
                                    complete your transaction.
                                </p>
                                <p className="bold mt-1">
                                    DISCLAIMER: Your session will expire if you
                                    do not pay within 20 minutes.
                                </p>
                                <hr className="mt-5" />
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <h3>Contact Information</h3>
                            <p>
                                You will receive a QR Code upon purchase. It
                                will be emailed to you (if provided) and also
                                sent to your phone (if provided). It is
                                mandatory to show your QR Code.
                            </p>
                            <div className="credit-info-card__text-field">
                                <p>Email</p>
                                <Input
                                    placeholder="name@example.com"
                                    type="email"
                                />
                            </div>
                            <div className="credit-info-card__text-field">
                                <p>Phone Number</p>
                                <Input
                                    placeholder="XXX-XXX-XXXX"
                                    type="tel"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                />
                            </div>
                            <hr className="mt-7 mb-7" />
                            <h3 className="mb-3">Payment Information</h3>
                            <RadioGroup defaultValue="apple-pay">
                                <div className="flex items-center space-x-2 mb-5">
                                    <Button
                                        className="border-none"
                                        variant={'accent'}
                                    >
                                        Add Card
                                    </Button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="apple-pay"
                                        id="apple-pay"
                                    />
                                    <Label htmlFor="apple-pay">
                                        <div className="credit-info-card__radio-group-item ">
                                            <FontAwesomeIcon
                                                icon={faCcApplePay}
                                            />
                                            <p>Apple Pay</p>
                                        </div>
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="google-pay"
                                        id="google-pay"
                                    />
                                    <Label htmlFor="google-pay">
                                        <div className="credit-info-card__radio-group-item ">
                                            <FontAwesomeIcon
                                                icon={faGooglePay}
                                            />
                                            <p>Google Pay</p>
                                        </div>
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="pay-pal"
                                        id="pay-pal"
                                    />
                                    <Label htmlFor="pay-pal">
                                        <div className="credit-info-card__radio-group-item ">
                                            <FontAwesomeIcon
                                                icon={faCcPaypal}
                                            />
                                            <p>PayPal</p>
                                        </div>
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="amazon-pay"
                                        id="amazon-pay"
                                    />
                                    <Label htmlFor="amazon-pay">
                                        <div className="credit-info-card__radio-group-item ">
                                            <FontAwesomeIcon
                                                icon={faCcAmazonPay}
                                            />
                                            <p>Amazon Pay</p>
                                        </div>
                                    </Label>
                                </div>
                            </RadioGroup>
                        </CardContent>
                    </Card>
                </div>
                <div className="credit-card-page__order-details">
                    <h2>Order Details</h2>
                    <div className="order-details__pricing">
                        <p className="medium">Seat X Ticket</p>
                        <p className="bold">
                            {eventData['ticketCost'] <= 0
                                ? 'FREE'
                                : '$' + eventData['ticketCost']}
                        </p>
                    </div>
                    {eventData['ticketCost'] > 0 && (
                        <div className="order-details__pricing">
                            <p className="medium">Convenience Fee</p>
                            <p className="bold">${CONVENIENCE_FEE}</p>
                        </div>
                    )}
                    <hr />
                    <div className="order-details__pricing-final">
                        <p className="bold">Total</p>
                        <p className="black">
                            {eventData['ticketCost'] <= 0
                                ? 'FREE'
                                : '$' +
                                  (eventData['ticketCost'] + CONVENIENCE_FEE)}
                        </p>
                    </div>
                    <Policies
                        className={'order-details__policies'}
                        showAmenities
                    />
                </div>
            </div>
            <PurchaseStrip total={eventData['ticketCost'] + CONVENIENCE_FEE} />
        </div>
    ) : (
        <div className="booking-page__error">
            <Card className="booking-page__error-card">
                <CardHeader>
                    <CardTitle>
                        <h3>Ticket not found!</h3>
                    </CardTitle>
                    <CardDescription>
                        Looks like you entered a wacky URL or did something bad!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild size={'sm'} variant={'accent'}>
                        <Link to="/events">Go Back</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Booking;
