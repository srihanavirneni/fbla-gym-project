import './ContactHeader.css';

const ContactHeader = () => {
    return (
        <div className="contact-header">
            <div className="contact-header__main-info">
                <h1 className="black">Contact Us!</h1>
                <p className="medium">
                    Have questions or want to book our gym for your next event?
                    We’re here to help! Reach out to us through any of the
                    following methods:
                </p>
            </div>
        </div>
    );
};

export default ContactHeader;
