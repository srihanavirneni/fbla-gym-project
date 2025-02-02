import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCcAmazonPay,
    faCcApplePay,
    faCcPaypal,
    faGooglePay,
} from '@fortawesome/free-brands-svg-icons';

import './CreditCardPayment.css';

const CreditCardPayment = () => {
    return (
        <div className="credit-card-page">
            <div className="credit-card-page__info">
                <Card className="credit-card-page__info-card">
                    <CardHeader>
                        <CardTitle className="black">Purchase Ticket</CardTitle>
                        <CardDescription>
                            <p className="mt-2">
                                Fill out the following information to complete
                                your transaction.
                            </p>
                            <p className="bold mt-1">
                                DISCLAIMER: Your session will expire if you do
                                not pay within 20 minutes.
                            </p>
                            <hr className="mt-5" />
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h3>Contact Information</h3>
                        <p className="mt-2 mb-5">
                            You will receive a <b>bar code</b> upon purchase. It
                            will be emailed to you (if provided) and also sent
                            to your phone (if provided). It is mandatory to show
                            your bar code in the check-in area.
                        </p>
                        <div className="credit-info-card__text-field">
                            <p>E-mail</p>
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
                                        <FontAwesomeIcon icon={faCcApplePay} />
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
                                        <FontAwesomeIcon icon={faGooglePay} />
                                        <p>Google Pay</p>
                                    </div>
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="pay-pal" id="pay-pal" />
                                <Label htmlFor="pay-pal">
                                    <div className="credit-info-card__radio-group-item ">
                                        <FontAwesomeIcon icon={faCcPaypal} />
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
                                        <FontAwesomeIcon icon={faCcAmazonPay} />
                                        <p>Amazon Pay</p>
                                    </div>
                                </Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CreditCardPayment;
