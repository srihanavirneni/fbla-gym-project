import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import './FAQ.css';

const FAQ = () => {
    return (
        <div className="home-faq">
            <div className="faq-info">
                <h1>Frequently Asked Questions!</h1>
                <p>
                    Many of our customers have a variety of questions! Here are
                    the questions that customers have the most!
                </p>
            </div>
            <div className="faq-list">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            What amenities are available at the facility?
                        </AccordionTrigger>
                        <AccordionContent>
                            Our gym is equipped with state-of-the-art acoustics
                            and lighting, food trucks, and spacious locker rooms
                            with showers. Free Wi-Fi (Byot) is also available.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Is there a dress code?
                        </AccordionTrigger>
                        <AccordionContent>
                            We ask members to wear appropriate athletic attire
                            and closed-toe shoes while using the facilities.
                            Although some events may prefer different dress
                            codes such as the school dance is usually requires
                            formal wear.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            What measures are in place for cleanliness and
                            hygiene?
                        </AccordionTrigger>
                        <AccordionContent>
                            We prioritize the health and safety of our users by
                            maintaining rigorous cleaning protocols. Our
                            facilities are cleaned daily, and sanitizing
                            stations are available throughout the gym.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Is it possible to buy tickets for multiple events?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes! You can buy tickets for any available event
                            listed in our Calendar and Events page.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
