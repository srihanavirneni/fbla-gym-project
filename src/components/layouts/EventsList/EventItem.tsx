import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import './EventItem.css';

const EventItem = (props: any) => {
    return (
        <li className="event-item">
            <Card className="event-item__content">
                <CardHeader>
                    <CardTitle className="bold">{props.name}</CardTitle>
                    <CardDescription>
                        {' '}
                        <div className="item-content__info">
                            <Badge>{props.type}</Badge>
                            <p className="bold">
                                {props.date.toLocaleDateString()}{' '}
                                {props.date.toLocaleTimeString()}
                            </p>
                        </div>
                        <p className="bold">Location: {props.location}</p>
                    </CardDescription>
                </CardHeader>
                <CardContent className="item-content__main-info">
                    <p>{props.description}</p>
                    <p>
                        <b>Event Organizers: </b> {props.eventOrganizers}
                    </p>
                    {props.specialNotes && (
                        <p>
                            <b>Special Notes: </b> {props.specialNotes}
                        </p>
                    )}
                </CardContent>
                <CardFooter className="item-content__actions">
                    <Button asChild variant="secondary" size="sm">
                        <Link to="/" className="bold">
                            Add To Calendar
                        </Link>
                    </Button>
                    <Button asChild variant="accent" size="sm">
                        <Link to="/" className="bold">
                            {props.ticketCost === 0
                                ? 'Get Ticket for FREE'
                                : `Buy Ticket for $${props.ticketCost}.00`}
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </li>
    );
};

export default EventItem;
