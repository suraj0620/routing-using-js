import React from 'react'
import './about.css'

function navigateTo(path) {
  window.history.pushState(null, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default function about() {
  return (
    <div className="heading">
      <h1>About</h1>
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
