import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import StatusHeader from './StatusHeader';
import './Status.css';

const Updates = () => {
    const todayDate = new Date();

    return (
        <div className="status-page">
            <StatusHeader />
            <div className="status-page__content">
                <Card className="status-page__info-card">
                    <CardHeader>
                        <CardTitle className="bold">
                            All Systems Operational
                        </CardTitle>
                        <CardDescription className="info-card__description">
                            <div className="status-description__badge">
                                <p className="black">
                                    {todayDate.toLocaleDateString()}
                                </p>
                                <Badge>Operational</Badge>
                            </div>
                            <p className="bold">
                                All systems are currently operational today.
                                Business will continue as normal!
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="info-card__main-info">
                        <ul>
                            <li>
                                <h4>Main Facility</h4>
                                <Badge>Available</Badge>
                            </li>
                            <li>
                                <h4>Stadium</h4>
                                <Badge>Available</Badge>
                            </li>
                            <li>
                                <h4>Auditorium</h4>
                                <Badge>Available</Badge>
                            </li>
                            <hr />
                            <li>
                                <h4>Sound</h4>
                                <Badge>Available</Badge>
                            </li>
                            <li>
                                <h4>Lighting</h4>
                                <Badge>Available</Badge>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter className="item-content__actions">
                        <p>Updated a few seconds ago</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Updates;
