import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <p  className='text'>Projects</p>
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