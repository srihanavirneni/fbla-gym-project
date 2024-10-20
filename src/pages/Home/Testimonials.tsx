import FakeTweet from '@njrardin/react-fake-tweet';

import basketballCoach from '../../assets/profilepictures/basketballcoach.jpeg';
import concertHolder from '../../assets/profilepictures/concertholder.png';
import craftFair from '../../assets/profilepictures/craftfair.png';
import charityOrganizer from '../../assets/profilepictures/charityorganizer.png';
import volleyballtournament from '../../assets/profilepictures/volleyballtournament.png';
import businessExpo from '../../assets/profilepictures/businessexpo.png';

import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className="home__testimonials">
            <h1 className="black">Still don't believe us?</h1>
            <p>
                Check out these amazing testimonials from people who've
                experienced our gym firsthand!
            </p>
            <div className="testimonials-list__wrapper">
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'wvhsbrandon',
                            name: 'Coach Brandon W',
                            avatar: basketballCoach,
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: "We hosted our annual youth basketball tournament at West Virginia High's gymnasium, and it was a super huge success! The full seat capacity had given us a lot of room for our spectators and the layout made it easy for the players and the fans to navigate. The rental process was pretty straightforward, and the staff was incredibly helpful in ensuring everything ran smoothly. We are definitely going to be using this gymnasium for our future events. Go West Virginia High!",
                        image: '',
                        date: '9:00 PM · Feb 14, 2024',
                        app: 'X for iPhone',
                        retweets: 571,
                        quotedTweets: 33,
                        likes: 1200,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'samanthak',
                            name: 'Samantha K.',
                            avatar: concertHolder,
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: "Hello yall! Our community concert was held at the gymnasium facility in West Virginia High, and the venue had exceeded all of ourd expectations. The acoustics were fantastic, and the seating arrangements allowed everyone to enjoy the show comfortably. The arena's spacious design gave us the professional feel we wanted for the event. Working with the rental team was effortless—they took care of everything from setup to takedown. I can't wait to plan our next concert here!",
                        image: '',
                        date: '2:25 PM · Jan 1, 2023',
                        app: 'X for iPhone',
                        retweets: 195,
                        quotedTweets: 258,
                        likes: 3253,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'darachelh',
                            name: 'Rachel H.',
                            avatar: craftFair,
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'We organized a craft fair at the West Virginia High school gym and it was amazing! There was enough space for everyone to show off their arts and crafts.',
                        image: '',
                        date: '1:02 PM · Oct 23, 2022',
                        app: 'X for iPhone',
                        retweets: 15,
                        quotedTweets: 50,
                        likes: 768,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'brightminds_foundation',
                            name: 'Bright Minds Foundation',
                            avatar: charityOrganizer,
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'The West Virginia High school gym was the perfect choice to raise money for charity! We raised over 10k in one day in the gym!',
                        image: '',
                        date: '9:23 AM · Jun 2, 2024',
                        app: 'X for iPhone',
                        retweets: 215,
                        quotedTweets: 458,
                        likes: 6383,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'wvhs_karenl',
                            name: 'Karen L.',
                            avatar: volleyballtournament,
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'I recently hosted a regional volleyball tournament in the West Virginia High school gymnasium. Volleyball players were pleased with the gym floor!',
                        image: '',
                        date: '12:35 AM · Mar 17, 2023',
                        app: 'X for iPhone',
                        retweets: 32000,
                        quotedTweets: 100,
                        likes: 12700,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'david_scott',
                            name: 'David S.',
                            avatar: businessExpo,
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'We hosted a regional business expo in West Virginia High school gymnasium, and so many entrepreneurs showed up allowing everyone to network! The gym was big enough to have business tents setup!',
                        image: '',
                        date: '6:47 PM · May 9, 2024',
                        app: 'X for iPhone',
                        retweets: 163,
                        quotedTweets: 281,
                        likes: 3652,
                    }}
                />
            </div>
        </div>
    );
};

export default Testimonials;
