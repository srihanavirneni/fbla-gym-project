import './StatusHeader.css';

const StatusHeader = () => {
    return (
        <div className="status-header">
            <div className="status-header__main-info">
                <h1 className="black">Gym Status</h1>
                <p className="medium">
                    Our gymnasium status is updated realtime. Please use our
                    current status to make your future decisions!
                </p>
            </div>
        </div>
    );
};

export default StatusHeader;
