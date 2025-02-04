import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useParams } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import PaymentInfo from './PaymentInfo';

import './CreditCardPayment.css';

const CreditCardPayment = (props: any) => {
    const params = useParams();
    const currentId = params.id;

    return (
        <div className="credit-card-page">
            <div className="credit-card-page__info">
                <Card className="credit-card-page__info-card">
                    <CardHeader>
                        <Button
                            asChild
                            className="border-none transaction__back-button"
                            variant={'accent'}
                        >
                            <Link to={`/events/payment/${currentId}`}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Link>
                        </Button>
                        <CardTitle className="black">
                            {props.ticketCost <= 0
                                ? 'Get Ticket for FREE'
                                : 'Purchase Ticket'}
                        </CardTitle>
                        <CardDescription>
                            <p className="mt-2">
                                Fill out the following information to complete
                                your transaction.
                            </p>
                            <p className="bold mt-1">
                                DISCLAIMER: Your session will expire if you do
                                not {props.ticketCost <= 0 ? 'claim' : 'pay'}
                                within 20 minutes.
                            </p>
                            <hr className="mt-5" />
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h3>Contact Information</h3>
                        <p className="mt-2 mb-5">
                            You will receive a <b>bar code</b> upon{' '}
                            {props.ticketCost <= 0 ? 'claiming the ticket' : 'purchase'}
                            . It will be emailed to you (if provided) and also
                            sent to your phone (if provided). It is mandatory to
                            show your bar code in the check-in area.
                        </p>
                        <div className="credit-info-card__text-field">
                            <p>Full Name</p>
                            <Input
                                placeholder="John Doe"
                                type="text"
                                onChange={(e) => props.setName(e.target.value)}
                            />
                        </div>
                        <div className="credit-info-card__text-field">
                            <p>E-mail</p>
                            <Input
                                placeholder="name@example.com"
                                type="email"
                                onChange={(e) => props.setEmail(e.target.value)}
                            />
                        </div>
                        <div className="credit-info-card__text-field">
                            <p>Phone Number</p>
                            <p className="text-sm">
                                Please include dashes in your phone number.
                            </p>
                            <Input
                                placeholder="XXX-XXX-XXXX"
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            />
                        </div>
                        {props.ticketCost > 0 && (
                            <>
                                <hr className="mt-7 mb-7" />
                                <h3 className="mb-1">Payment Information</h3>
                                <p className="mb-3 text-sm">
                                    All transactions are secured and encrypted.
                                </p>
                                <PaymentInfo />
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CreditCardPayment;
