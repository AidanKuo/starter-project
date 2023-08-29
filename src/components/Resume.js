// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div>
      <p className='text'>Resume</p>
      <div className='resume-container'>
        <p style={{ textAlign: 'center' }}className='resume-text'>Aidan L. Kuo<br/>akuo18@uw.edu / 832-206-5968</p>
        <p className='resume-text-title'>Education</p>
        <p className='resume-text'>University of Washington
        <br/>Expected June 2025 Seattle, WA
        <br/>B.S. – Pre-Science
        <br/>Relevant coursework: Intellectual Foundations of Informatics, Foundational Skills for Data Science, Computer Programming I and II, Introduction to Logic, Calculus with Analytic Geometry I, II, and III
        </p>
        <br/>
        <p className='resume-text-title'>Work Experience</p>
        <p className='resume-text'>Baskin Robins / Pearland, TX
        <br/>June 2019 – 2020
        <br/>Crew Member (2019), Shift Manager (2020)
        <br/>Grazia Italian Kitchen / Pearland, TX
        <br/>Waiters Assistant
        <br/>June 2018 - 2019
        </p>
        <br/>
        <p className='resume-text-title'>Technical Skills</p>
        <p className='resume-text'>Languages: R, Java
        <br/>Tools: Figma
        </p>
        <br/>
        <p className='resume-text-title'>Research Interests</p>
        <p className='resume-text'>Informatics
        <br/>Artificial intelligence and Machine learning
        <br/>Cybersecurity
        <br/>Data analytics
        </p>
      </div>
      <nav>
        <ul className="link-list">
          <li>
            <Link to="/starter-project" className="plain-link">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Resume;