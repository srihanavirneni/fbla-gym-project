import { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import paypal from '../../assets/images/paypal.png';
import './PaymentInfo.css';

const PaymentInfo = () => {
    const [isCreditCardOpen, setIsCreditCardOpen] = useState(false);
    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove all non-digits
        if (value) {
            // Format with spaces every 4 digits
            const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
            setCardNumber(formatted);
            e.target.value = formatted;
        }
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove all non-digits
        setCardNumber(value);
    };

    const checkLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === e.target.maxLength) {
            e.stopPropagation();
            e.preventDefault();
            return false;
        }
        return true;
    };

    return (
        <ul className="payment-info">
            <li className="payment-info__credit-card">
                <Button
                    variant={'outline'}
                    onClick={() => setIsCreditCardOpen(!isCreditCardOpen)}
                    className={`${isCreditCardOpen && 'credit-card-open'}`}
                >
                    <div>
                        <FontAwesomeIcon icon={faCreditCard} />
                        <p className="ml-2">Credit Card</p>
                    </div>
                    <div>
                        <ul>
                            <img
                                src={
                                    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg'
                                }
                                alt="Visa"
                            />
                            <img
                                src={
                                    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg'
                                }
                                alt="Mastercard"
                            />
                            <img
                                src={
                                    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg'
                                }
                                alt="Discover"
                            />
                            <img
                                src={
                                    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/discover.C7UbFpNb.svg'
                                }
                                alt="Discover"
                            />
                            <li>
                                <p className="black">+4</p>
                            </li>
                        </ul>
                    </div>
                </Button>
                {isCreditCardOpen && (
                    <div className="payment-info__credit-card-modal">
                        <div>
                            <div className="modal__credit-card-input">
                                <p className="text-sm bold mb-1">Card Number</p>
                                <Input
                                    type="tel"
                                    maxLength={16}
                                    inputMode="numeric"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    onBlur={handleCardNumberBlur}
                                    placeholder="Card Number (XXXX XXXX XXXX XXXX)"
                                />
                            </div>
                            <div className="modal__credit-card-input-container">
                                <div className="modal__credit-card-input">
                                    <p className="text-sm bold mb-1">
                                        Expiration Date (MM/YY)
                                    </p>
                                    <Input
                                        type="date"
                                        placeholder="Expiration Date (MM/YY)"
                                    />
                                </div>
                                <div className="modal__credit-card-input">
                                    <p className="text-sm bold mb-1">
                                        Security Code (CVV)
                                    </p>
                                    <Input
                                        type="number"
                                        pattern="\d*"
                                        maxLength={4}
                                        placeholder="Security Code"
                                        onKeyDown={(e) => checkLength(e as any)}
                                    />
                                </div>
                            </div>
                            <div className="modal__credit-card-input">
                                <p className="text-sm bold mb-1">Card Name</p>
                                <Input type="number" placeholder="Card Name" />
                            </div>
                            <hr className="my-3" />
                            <div className="modal__credit-card-input select-country">
                                <p className="text-sm bold mb-1">
                                    Country/Region
                                </p>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="United States" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="us">
                                            United States
                                        </SelectItem>
                                        <SelectItem value="uk">
                                            UK (United Kingdom)
                                        </SelectItem>
                                        <SelectItem value="au">
                                            Australia
                                        </SelectItem>
                                        <SelectItem value="kr">
                                            South Korea
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="modal__credit-card-input-container">
                                <div className="modal__credit-card-input">
                                    <p className="text-sm bold mb-1">
                                        First Name
                                    </p>
                                    <Input
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="modal__credit-card-input">
                                    <p className="text-sm bold mb-1">
                                        Last Name
                                    </p>
                                    <Input
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="modal__credit-card-input">
                                <p className="text-sm bold mb-1">
                                    Billing Address
                                </p>
                                <Input
                                    type="text"
                                    placeholder="Billing Address"
                                />
                            </div>
                            <div className="modal__credit-card-input">
                                <p className="text-sm bold mb-1">
                                    Apartment, Suite, etc. (optional)
                                </p>
                                <Input
                                    type="text"
                                    placeholder="Apartment, Suite, etc. (optional)"
                                />
                            </div>
                            <div className="modal__credit-card-input-container">
                                <div className="modal__credit-card-input">
                                    <p className="text-sm bold mb-1">City</p>
                                    <Input type="text" placeholder="City" />
                                </div>
                                <div className="modal__credit-card-input">
                                    <p className="text-sm bold mb-1">State</p>
                                    <Input type="text" placeholder="State" />
                                </div>
                                <div className="modal__credit-card-input">
                                    <p className="text-sm bold mb-1">
                                        Zip Code
                                    </p>
                                    <Input
                                        type="number"
                                        placeholder="Zip Code (XXXXX)"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </li>
            <li className='transaction-pay-btn'>
                <a href="https://www.apple.com/apple-pay/" target="_blank">
                    <Button variant={'outline'}>
                        <FontAwesomeIcon icon={faApple} />
                        <p className="text-lg">Pay</p>
                    </Button>
                </a>
            </li>
            <li className="google-pay transaction-pay-btn">
                <a href="https://www.google.com/pay" target="_blank">
                    <Button variant={'outline'}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                        alt="google"
                    />
                        <p className="bold text-lg">Pay</p>
                    </Button>
                </a>
            </li>
            <li className="paypal-pay transaction-pay-btn">
                <a href="https://www.paypal.com/" target="_blank">
                    <Button variant={'outline'}>
                        <img src={paypal} alt="paypal" />
                    </Button>
                </a>
            </li>
        </ul>
    );
};

export default PaymentInfo;
