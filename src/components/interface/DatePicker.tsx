'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import './DatePicker.css';

const DatePicker = (props: any) => {
    const [date, setDate] = React.useState<Date>(props.initialDate);
    const changeDate = (newDate: any) => {
        setDate(newDate);
        if (props.onChange) {
            props.onChange(newDate);
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'w-full justify-start text-left font-normal',
                        !date && 'text-muted-foreground',
                        'date-picker__button',
                        props.className
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                        <span>{format(date, 'PPP')}</span>
                    ) : (
                        <span>Pick a date</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={changeDate}
                    disabledDays={props.disabledDays}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};

export default DatePicker;
