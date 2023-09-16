// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <p className='text'>About</p>
      <p style={{ textAlign: 'center' }}className='resume-text'>diamond tft</p>
      <nav>
        <ul className="link-list">
          <li>
            <Link to="/website" className="plain-link">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default About;