import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
 
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">We'd love to hear from you. Get in touch with us today!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>📍 Address</h3>
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
          </div>

          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
            <p>Available Mon-Fri, 9AM-6PM EST</p>
          </div>

          <div className="info-item">
            <h3>📧 Email</h3>
            <p>info@example.com</p>
            <p>support@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
