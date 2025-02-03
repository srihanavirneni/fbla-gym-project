import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { EVENT_DATA, CONVENIENCE_FEE } from '@/context/event-list';
import emailjs from '@emailjs/browser';

import BookingHeader from '../Booking/BookingHeader';
import BookingError from '../Booking/BookingError';

import CreditCardPayment from './CreditCardPayment';
import OrderDetails from './OrderDetails';

import PurchaseStrip from './PurchaseStrip';
import Confirmation from './Confirmation';

import './Transaction.css';
const Transaction = () => {
    const params = useParams();

    const currentId = params.id;
    const currentSeats = params.seats || ''; // Provide default empty string

    if (!currentSeats || currentSeats === '') {
        return <BookingError />;
    }

    const currentSeatsArray = currentSeats.split('b');

    let eventData: any;

    EVENT_DATA.forEach((event: any) => {
        if (event.id === currentId) {
            eventData = event;
        }
    });

    const [purchased, setPurchased] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const generateOrderId = () => {
        return Math.random().toString(36).substring(2, 15);
    };

    const parseSeats = () => {
        let seats = '';
        for (let i = 0; i < currentSeatsArray.length; i++) {
            const sectionNum = currentSeatsArray[i].charAt(0);
            const rowLetter = currentSeatsArray[i].charAt(1);
            const seatNum = currentSeatsArray[i].substring(2);
            seats += `- Section ${sectionNum}, Row ${rowLetter}, Seat ${seatNum}\n`;
        }

        return seats;
    };

    const parseDate = () => {
        const date = new Date(eventData['date']);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    const parseTime = () => {
        const date = new Date(eventData['startTime']);
        const hour = date.getHours();
        const minute = date.getMinutes();
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
    };

    const sendEmail = (e: any) => {
        e.preventDefault();

        setPurchased(true);

        // emailjs.send(
        //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
        //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        //     {
        //         to_email: email,
        //         to_name: name,
        //         id: generateOrderId(),
        //         event_name: eventData['name'],
        //         event_description: eventData['description'],
        //         date: parseDate(),
        //         time: parseTime(),
        //         location: eventData['location'],
        //         quantity: currentSeatsArray.length,
        //         seats: parseSeats(),
        //     },
        //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        // );
    };

    return eventData ? (
        <div className="transaction">
            <BookingHeader
                name={eventData['name']}
                description={eventData['description']}
                startTime={eventData['startTime']}
                endTime={eventData['endTime']}
            />
            {purchased ? (
                <Confirmation />
            ) : (
                <>
                    <div className="transaction-content">
                        <CreditCardPayment
                            setEmail={setEmail}
                            setName={setName}
                        />
                        <OrderDetails
                            ticketCost={eventData['ticketCost']}
                            convenienceFee={CONVENIENCE_FEE}
                            seats={currentSeatsArray}
                        />
                    </div>
                    <PurchaseStrip
                        total={
                            eventData['ticketCost'] > 0
                                ? eventData['ticketCost'] *
                                      currentSeatsArray.length +
                                  CONVENIENCE_FEE
                                : 0
                        }
                        sendEmail={sendEmail}
                    />
                </>
            )}
        </div>
    ) : (
        <BookingError />
    );
};

export default Transaction;
