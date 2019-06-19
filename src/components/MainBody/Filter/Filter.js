import React from 'react'
import FilterCard from './FilterCard'

export default function Filter () {
  return (
    <div className='list-group'>
      <a href='#' className='list-group-item list-group-item-action active'>
        Filters
      </a>
      <a href='#' className='list-group-item list-group-item-action'>
        <FilterCard head={'one'} colapsId={'one'}/>
      </a>
      <a href='#' className='list-group-item list-group-item-action'>
        <FilterCard head={'two'} colapsId={'two'}/>
      </a>
      <a href='#' className='list-group-item list-group-item-action'>
        <FilterCard head={'three'} colapsId={'three'}/>
      </a>
    </div>
  )
}
