import React from 'react'
import './contact.css'

function navigateTo(path) {
  window.history.pushState(null, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default function contact() {
  return (
    <div className="heading">
      <h1>Contact</h1>
      <div className='link'>
        <button onClick={() => navigateTo('/')}>Home</button>
        <br />
        <button onClick={() => navigateTo('/about')}>About</button>
        <br />
        <button onClick={() => navigateTo('/contact')}>Contact</button>
      </div>
    </div>
  )
}
