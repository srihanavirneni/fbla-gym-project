import { motion } from 'framer-motion';

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
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="testimonials-list__wrapper"
            >
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
                        text: "Our youth basketball tournament at Lambert High's gym was a big success, with plenty of seating and easy navigation for everyone. The rental process was smooth, and we’ll definitely use this space again!",
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
                        text: "The community concert at Lambert High's gym exceeded our expectations, with fantastic acoustics and comfortable seating. Setup was a breeze thanks to the rental team, and we can’t wait to return!",
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
                        text: 'We organized a craft fair at the Lambert High school gym and it was amazing! There was enough space for everyone to show off their arts and crafts.',
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
                        text: 'The Lambert High school gym was the perfect choice to raise money for charity! We raised over 10k in one day in the gym!',
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
                        text: 'I recently hosted a regional volleyball tournament in the Lambert High school gymnasium. Volleyball players were pleased with the gym floor!',
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
                            name: 'Dr. David',
                            avatar: businessExpo,
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: "We hosted a regional business expo over in Lambert's gymnasium, and so many entrepreneurs showed up allowing everyone to network! The gym was big enough to have business tents setup!",
                        image: '',
                        date: '6:47 PM · May 9, 2024',
                        app: 'X for iPhone',
                        retweets: 163,
                        quotedTweets: 281,
                        likes: 3652,
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Testimonials;
