import './CalendarKey.css';

const CalendarKey = () => {
  return (
    <div className='calendar-key'>
        <div>
            <div className='calendar-key__item-color calendar-key-closed'></div>
            <p>Closed</p>
        </div>
        <div>
            <div className='calendar-key__item-color calendar-key-holiday'></div>
            <p>Early Release / Holiday</p>
        </div>
        <div>
            <div className='calendar-key__item-color calendar-key-weather'></div>
            <p>Weather Warning</p>
        </div>
        <div>
            <div className='calendar-key__item-color calendar-key-available'></div>
            <p>Available</p>
        </div>
    </div>
  )
}

export default CalendarKey