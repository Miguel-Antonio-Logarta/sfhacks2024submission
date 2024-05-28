import React from 'react'

const Filters = ({range, onRangeChange}) => {
  return (
    <div className='filters-input-group'>
        <input type='range' value={range} min={1} max={10} onChange={(e) => onRangeChange(e)} className='radius-input' />
        <span>Range: {range} miles</span>
    </div>
  )
}

export default Filters