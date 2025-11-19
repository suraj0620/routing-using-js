import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  const path = window.location.pathname

  let currentComponent

  if (path === '/' || path === '' || path === '/home') {
    currentComponent = <Home />
  }
  else if (path === '/about') {
    currentComponent = <About />
  }
  else if (path === '/contact') {
    currentComponent = <Contact />
  }
  else {
    currentComponent = <h1>404 - Page Not Found</h1>
  }

  function navigate(newPath) {
    window.history.pushState(null, '', newPath)
    window.location.reload()
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
      </nav>
      <main>
        {currentComponent}
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
