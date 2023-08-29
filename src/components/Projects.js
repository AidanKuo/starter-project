import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <p  className='text'>Projects</p>
      <nav>
        <ul className="link-list">
          <li>
            <Link to="https://www.figma.com/file/0DrginWCTEuGjYCL7DLdNW/akuo18's-team-library?type=design&node-id=1913-2&mode=design" className="plain-link">Info 200 Figma Project</Link>
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