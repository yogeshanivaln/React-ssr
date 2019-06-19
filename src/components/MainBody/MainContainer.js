import React from 'react'
import ProductContainer from './Product/ProductContainer'
import Filter from './Filter/Filter'

export default function MainContainer () {
  return (
    <div>
      <br />
      <div className='row'>
        <div className='col-md-3'>
          <Filter />
        </div>
        <div className='col-md-9'>
          <ProductContainer />
        </div>
      </div>
    </div>
  )
}
