import './NoSeatAlert.css';

const NoSeatAlert = () => {
    return (
        <div className="no-seat-alert__container">
            <div className="no-seat-alert">
                <h2>This event requires no seats!</h2>
                <p>
                    Make sure to come with all prepared items as the event
                    describes too!
                </p>
            </div>
        </div>
    );
};

export default NoSeatAlert;
