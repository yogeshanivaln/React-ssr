import React, { Component } from 'react'
import { setMessage } from './store/appReducer'
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/MainBody/MainContainer';

export default function App () {
  return (
    <div className='conatiner-fluid'>
      <HeaderContainer />
      <MainContainer />
    </div>
  )
}
