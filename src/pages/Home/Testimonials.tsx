import FakeTweet from '@njrardin/react-fake-tweet';
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
                            nickname: 'X',
                            name: 'Twitter',
                            avatar: 'avatar.png',
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'This is a fake testimonial',
                        image: '',
                        date: '3:32 PM · Feb 14, 2024',
                        app: 'X for iPhone',
                        retweets: 32000,
                        quotedTweets: 100,
                        likes: 12700,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'X',
                            name: 'Twitter',
                            avatar: 'avatar.png',
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'This is a fake testimonial',
                        image: '',
                        date: '3:32 PM · Feb 14, 2024',
                        app: 'X for iPhone',
                        retweets: 32000,
                        quotedTweets: 100,
                        likes: 12700,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'X',
                            name: 'Twitter',
                            avatar: 'avatar.png',
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'This is a fake testimonial',
                        image: '',
                        date: '3:32 PM · Feb 14, 2024',
                        app: 'X for iPhone',
                        retweets: 32000,
                        quotedTweets: 100,
                        likes: 12700,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'X',
                            name: 'Twitter',
                            avatar: 'avatar.png',
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'This is a fake testimonial',
                        image: '',
                        date: '3:32 PM · Feb 14, 2024',
                        app: 'X for iPhone',
                        retweets: 32000,
                        quotedTweets: 100,
                        likes: 12700,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'X',
                            name: 'Twitter',
                            avatar: 'avatar.png',
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'This is a fake testimonial',
                        image: '',
                        date: '3:32 PM · Feb 14, 2024',
                        app: 'X for iPhone',
                        retweets: 32000,
                        quotedTweets: 100,
                        likes: 12700,
                    }}
                />
                <FakeTweet
                    config={{
                        user: {
                            nickname: 'X',
                            name: 'Twitter',
                            avatar: 'avatar.png',
                            verified: true,
                            locked: false,
                        },
                        display: 'default',
                        text: 'This is a fake testimonial',
                        image: '',
                        date: '3:32 PM · Feb 14, 2024',
                        app: 'X for iPhone',
                        retweets: 32000,
                        quotedTweets: 100,
                        likes: 12700,
                    }}
                />
            </div>
        </div>
    );
};

export default Testimonials;
