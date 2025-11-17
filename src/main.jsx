import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'

const root = createRoot(document.getElementById('root'))

function renderPage() {
  const pathroot = window.location.pathname

  console.log('current path:', pathroot)

  let component

  if (pathroot === '/' || pathroot === '') {
    component = <Home />
  } else if (pathroot === '/about') {
    component = <About />
  } else if (pathroot === '/contact') {
    component = <Contact />
  } else {
    component = <h1>404 Not Found</h1>
  }

  root.render(component)
}

renderPage()

window.addEventListener('popstate', renderPage)