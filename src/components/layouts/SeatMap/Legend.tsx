import './Legend.css';

const Legend = () => {
  return (
    <div className='legend'>
        <div className='legend__item'>
            <div className='legend__item-color legend-available'></div>
            <p>Available</p>
        </div>
        <div className='legend__item'>
            <div className='legend__item-color legend-selected'></div>
            <p>Selected</p>
        </div>
        <div className='legend__item'>
            <div className='legend__item-color legend-taken'></div>
            <p>Taken</p>
        </div>
    </div>
  )
}

export default Legend