// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; //import style

function Home() {
  return (
    <div>
      <p className='header-text'>Aidan<br />Kuo</p>
      <div className='ASCII-container'>
        <p>wsp</p>
      </div>
      <nav>
        <ul className="link-list">
          <li>
            <Link to="/projects" className="plain-link">Projects</Link>
          </li>
        </ul>
      </nav>
      {/*<nav>
        <ul className="link-list">
          <li>
            <Link to="/about" className="plain-link">About</Link>
          </li>
        </ul>
      </nav>*/}
      <nav>
        <ul className="link-list">
          <li>
            <Link to="/resume" className="plain-link">Resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;





