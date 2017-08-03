import React from 'react'
import logo from '../avoxi-logo.png'  

export default () => {
  return (
    <div className="h3 w-100 shadow-2">
      <img src={logo} className="w4 ml3 mt3 dib" alt="logo" />
      <p className="dib fr gray" style={{margin:'22px 30px 0 0'}}>Skills Test</p>
    </div>
  )
}