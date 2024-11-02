import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import './Combobox.css';

const Combobox = (props: any) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className={`${props.className}`}>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                >
                    {value
                        ? props.items.find((item: any) => item.value === value)
                              ?.label
                        : props.labelPlaceholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className={`w-[200px] p-0 ${props.className}-content`}
            >
                <Command>
                    <CommandInput
                        placeholder={props.placeholder || 'Search for Items'}
                    />
                    <CommandList>
                        <CommandEmpty>No items found.</CommandEmpty>
                        <CommandGroup>
                            {props.items.map((item: any) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ''
                                                : currentValue
                                        );
                                        setOpen(false);
                                        props.onChange &&
                                            props.onChange(
                                                currentValue === value
                                                    ? ''
                                                    : currentValue
                                            );
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            value === item.value
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                    />
                                    {item.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default Combobox;
