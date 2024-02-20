import React from 'react'
import './newLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribeto our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter