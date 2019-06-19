import React from 'react'

export default function ProductCard () {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src='https://placeimg.com/170/170/tech' className='card-img-top imgMod' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>Kitchen Product1</h5>
        <p className='card-text'>
          Minim ut in nostrud ullamco adipisicing Lorem elit laborum id deserunt qui non sint. Aliqua aute dolor labore
          nulla excepteur voluptate laborum commodo non consequat commodo esse. Et consequat esse duis ad proident
          eiusmod. Do eiusmod sit irure enim magna incididunt mollit non dolor aliqua nisi.
        </p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>Rating</li>
        <li className='list-group-item'>$333</li>
      </ul>
      <div className='card-body'>
        <a href='#' className='btn btn-primary'>
          Add to Cart
        </a>
        <a href='#' className='btn btn-primary'>
          Increment
        </a>
      </div>
    </div>
  )
}
