import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>Welcome to Home</h1>
        <p className="subtitle">Your journey starts here</p>
      </div>
      <div className="home-content">
        <div className="home-card">
          <h2>What We Offer</h2>
          <p>We provide high-quality services and solutions tailored to meet your needs. Our team is dedicated to delivering excellence in every project.</p>
        </div>
        <div className="home-card">
          <h2>Why Choose Us</h2>
          <p>With years of experience and a passionate team, we guarantee satisfaction and reliable support. Your success is our priority.</p>
        </div>
        <div className="home-card">
          <h2>Get Started</h2>
          <p>Ready to begin? Navigate to our About page to learn more about our team, or Contact us to discuss your project requirements.</p>
        </div>
      </div>
      <div className="home-cta">
        <p>Let's build something amazing together!</p>
      </div>
    </div>
  )
}
