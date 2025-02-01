import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import './BookingError.css';

const BookingError = () => {
    return (
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

export default BookingError;
