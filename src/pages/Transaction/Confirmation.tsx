import { Link } from 'react-router-dom';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import './Confirmation.css';

const Confirmation = () => {
    return (
        <div className='confirmation-card-container'>
            <Card className="credit-card-page__info-card confirmation-card">
                <CardHeader>
                    <CardTitle className="black">
                        Your payment is complete!
                    </CardTitle>
                    <CardDescription>
                        <p className="mt-2">
                            Thank you for buying a ticket for the event! Make
                            sure you arrive on time.
                        </p>
                        <hr className="mt-5" />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-5">
                        A payment receipt has been sent to your email that you
                        provided in the Contact Information.
                    </p>
                    <Button asChild variant={'accent'}>
                        <Link className="confirmation__back-btn" to="/events">
                            See More Events
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Confirmation;
