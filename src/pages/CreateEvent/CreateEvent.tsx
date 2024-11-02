import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addDays, subDays } from 'date-fns';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import DatePicker from '@/components/interface/DatePicker';
import Combobox from '@/components/interface/Combobox';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import Policies from '@/components/layouts/Policies/Policies';
import './CreateEvent.css';

const formSchema = z.object({
    email: z.string().min(5).max(30),
    phoneNumber: z.string().min(10).max(20),
    eventname: z.string().min(2).max(40),
    description: z.string().min(10).max(150),
    date: z.date().min(new Date()).max(addDays(new Date(), 120)),
    location: z.string().min(2).max(20),
    ticketPrice: z.number().min(0).max(100),
    specialNotes: z.string().min(0).max(150).optional(),
});

const CreateEvent = () => {
    const [submitted, setSubmitted] = useState(false);

    const minDateSelection = new Date(); // min date as today
    const maxDateSelection = new Date();
    maxDateSelection.setDate(maxDateSelection.getDate() + 120); // 120 days after today

    const disabledDays = [
        {
            after: maxDateSelection,
            before: minDateSelection,
        },
    ];

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            phoneNumber: '',
            eventname: '',
            description: '',
            date: subDays(new Date(), 1),
            location: '',
            ticketPrice: -1, // 0 means free
            specialNotes: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setSubmitted(true);
        console.log(values);
    }

    return (
        <div className="create-event">
            <div className="create-event__header">
                <h1 className="black">Host an Event</h1>
                <p>
                    Our staff will verify your event and will get back to you
                    shortly! Once your event has been approved, it will be
                    booked.
                </p>
                <p>
                    <b>Disclaimer: </b>Don't expect us to immediately approve
                    your event.
                </p>
            </div>
            <div className="create-event__main-content">
                {!submitted ? (
                    <Card className="create-event__main-form">
                        <CardHeader>
                            <CardTitle className="bold">
                                Fill out Event Details
                            </CardTitle>
                            <CardDescription>
                                We need the following information from you and
                                about your event in order to process your
                                request to the best of our ability!
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-8"
                                >
                                    <div>
                                        <h3>Contact Information</h3>
                                        <p>
                                            Please fill this out in order to
                                            keep in touch!
                                        </p>
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="medium">
                                                    E-mail
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="create-event__input"
                                                        placeholder="name@example.com"
                                                        type="email"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="medium">
                                                    Phone Number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="create-event__input"
                                                        placeholder="XXX-XXX-XXXX"
                                                        type="tel"
                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <hr />
                                    <div>
                                        <h3>Event Information</h3>
                                        <p>
                                            Fill this out to the best of your
                                            ability!
                                        </p>
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="eventname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="medium">
                                                    Event Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="create-event__input"
                                                        placeholder="Enter Name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="medium">
                                                    Description
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        className="resize-y create-event__input"
                                                        placeholder="Describe your event!"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    Describe your event in
                                                    detail for the people to
                                                    see!
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="date"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="medium">
                                                    Date
                                                </FormLabel>
                                                <FormControl>
                                                    <DatePicker
                                                        disabledDays={
                                                            disabledDays
                                                        }
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="location"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="medium">
                                                    Location
                                                </FormLabel>
                                                <FormControl>
                                                    <Combobox
                                                        className="create-event__input"
                                                        labelPlaceholder="Select location"
                                                        placeholder="Select Location"
                                                        items={[
                                                            {
                                                                value: 'maingymnasium',
                                                                label: 'Main Gymnasium',
                                                            },
                                                            {
                                                                value: 'stadium',
                                                                label: 'Stadium',
                                                            },
                                                            {
                                                                value: 'cafeteria',
                                                                label: 'Cafeteria',
                                                            },
                                                        ]}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="ticketPrice"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="medium">
                                                    Ticket Price ($ amount)
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="create-event__input"
                                                        placeholder="Enter Ticket Price (if free, enter 0)"
                                                        type="number"
                                                        onChange={(event) => {
                                                            field.onChange(
                                                                Number(
                                                                    event.target
                                                                        .value
                                                                )
                                                            );
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="specialNotes"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="medium">
                                                    Special Notes
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="create-event__input"
                                                        placeholder="Enter any special notes for anyone interested in your event. (optional)"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    Optional
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        className="create-event__submit-button"
                                        variant={'accent'}
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                        <CardFooter />
                    </Card>
                ) : (
                    <div className="create-event__main-form-submitted">
                        <h2>Successfully submitted request!</h2>
                        <p>
                            We deeply appreciate you for submitting a request to
                            host in our facilities!
                        </p>
                        <p>
                            We will use your e-mail and phone number to get into
                            contact with you once we review your request
                        </p>
                        <Button
                            variant={'accent'}
                            onClick={() => {
                                setSubmitted(false);
                            }}
                        >
                            Review Form
                        </Button>
                    </div>
                )}
                <Policies className="create-event__policies" showAmenities />
            </div>
        </div>
    );
};

export default CreateEvent;
