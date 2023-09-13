import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <p  className='text'>Projects</p>
      <nav>
        <ul className="link-list">
          <li>
            <Link to="https://www.figma.com/proto/0DrginWCTEuGjYCL7DLdNW/akuo18's-team-library?type=design&node-id=1924-60&t=PXKV9hoJFZH2aoJP-1&scaling=scale-down&page-id=1913%3A2&starting-point-node-id=1924%3A60&mode=design" className="plain-link">VetConnect Mobile App</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="link-list">
          <li>
            <Link to="https://akuo18.shinyapps.io/final-project-A4/" className="plain-link">2021 Tokyo Olympics website</Link>
          </li>
        </ul>
      </nav>
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

export default Projects;