import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="about-subtitle">Learn more about our mission and team</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver innovative solutions that empower businesses and individuals to achieve their goals. 
          We believe in the power of technology and creativity to transform ideas into reality.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Values</h2>
        <ul className="values-list">
          <li><strong>Innovation:</strong> We constantly seek new ways to solve problems</li>
          <li><strong>Integrity:</strong> We operate with honesty and transparency</li>
          <li><strong>Excellence:</strong> We strive for the highest quality in everything we do</li>
          <li><strong>Collaboration:</strong> We work together to achieve great things</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Shaktiman</h3>
            <p>Lead Developer</p>
            <p className="team-bio">Passionate about creating elegant solutions with modern technologies.</p>
          </div>
          <div className="team-member">
            <h3>Sarah Designer</h3>
            <p>UI/UX Designer</p>
            <p className="team-bio">Creates beautiful and intuitive user experiences.</p>
          </div>
          <div className="team-member">
            <h3>Gangadhar</h3>
            <p>Project Manager</p>
            <p className="team-bio">Ensures projects are delivered on time and within scope.</p>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>
      </div>
    </div>
  )
}
