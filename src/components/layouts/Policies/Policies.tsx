import './Policies.css';

const Policies = (props: any) => {
    return (
        <div className={`policies ${props.className}`}>
            <h3 className="black">Policies: </h3>
            <p>
                The school gymnasium is available for community use during
                non-school hours, from 5:00 PM to 9:00 PM on weekdays and 9:00
                AM to 7:00 PM on weekends. Users are expected to follow all
                posted guidelines, which include wearing proper athletic attire,
                maintaining cleanliness, and respecting the facility and
                equipment. A responsible adult must supervise any minors under
                18. Any damages caused by negligence may result in a charge and
                possible suspension of booking privileges.
            </p>
            {props.showAmenities && (
                <div>
                    <hr />
                    <h3 className="black">Amenities: </h3>
                    <p>
                        The gym is equipped with a full-size basketball court,
                        volleyball nets, a scoreboard, and adjustable hoops,
                        allowing for various sports and activities. The facility
                        also includes lockers, restrooms, and a hydration
                        station, ensuring a comfortable and functional space for
                        community members.
                    </p>
                    <br />
                    <ul>
                        <li>
                            Concessions: A full-service concession stand is
                            located near the main entrance, offering snacks,
                            drinks, and hot food. Available items include: Hot
                            dogs, nachos, popcorn, candy Soda, water, and sports
                            drinks Gluten-free and vegetarian options are
                            available
                        </li>
                        <li>
                            Restrooms: Restrooms are located on both sides of
                            the gym near the entrances. All restrooms are ADA
                            accessible.
                        </li>
                        <li>
                            Wi-Fi: Free Wi-Fi is available in the gym for all
                            attendees. Connect to "BYOT"!
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Policies;
