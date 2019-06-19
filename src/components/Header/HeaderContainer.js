import React from 'react'
import Cart from './Cart.js';

export default function HeaderContainer () {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Shop Logo
      </a>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
          <Cart />
        </form>
      </div>
    </nav>
  )
}
