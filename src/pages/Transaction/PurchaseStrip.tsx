import { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

import './PurchaseStrip.css';

const PurchaseStrip = (props: any) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="ticket-purchase-strip">
            <div className="items-top flex space-x-2">
                <Checkbox
                    id="terms1"
                    checked={isChecked}
                    onCheckedChange={() => setIsChecked(!isChecked)}
                />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Accept terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                        You agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
            <div className="purchase-strip__total">
                <p>
                    Total:{' '}
                    <b>{props.total <= 0 ? 'FREE' : '$' + props.total}</b>
                </p>
                <Button
                    className="border-none"
                    disabled={!isChecked}
                    variant={'accent'}
                    onClick={props.sendEmail}
                >
                    Purchase {/* LEADS TO PURCHASE */}
                </Button>
            </div>
        </div>
    );
};

export default PurchaseStrip;
