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
                                <h4>Gymnasium</h4>
                                <Badge className='status-badge__available'>Available</Badge>
                            </li>
                            <li>
                                <h4>Soccer Field</h4>
                                <Badge className='status-badge__available'>Available</Badge>
                            </li>
                            <li>
                                <h4>Football Stadium</h4>
                                <Badge className='status-badge__available'>Available</Badge>
                            </li>
                            <li>
                                <h4>Auditorium</h4>
                                <Badge className='status-badge__available'>Available</Badge>
                            </li>
                            <hr />
                            <li>
                                <h4>Audio</h4>
                                <Badge className='status-badge__available'>Available</Badge>
                            </li>
                            <li>
                                <h4>Lighting</h4>
                                <Badge className='status-badge__available'>Available</Badge>
                            </li>
                            <li>
                                <h4>Food Stations</h4>
                                <Badge className='status-badge__available'>Available</Badge>
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
