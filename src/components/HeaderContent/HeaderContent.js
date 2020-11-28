import React from 'react';
import ParticleContainer from '../ParticleContainer/ParticleContainer';
import 'devicon';
import './HeaderContent.css';

function HeaderContent(props) {
  return (
    <>
      <div className="header-main">
        <div className="header-name">
          Harsh <span className="fix-surname">Boricha</span>
        </div>
        <p className="header-role">
          SOFTWARE <span style={{ backgroundColor: '#0563D5', padding: '0 2px' }}>DEVELOPER</span>
        </p>
        {/* <ul>
          <li>
            <i class="devicon-google-plain"></i>
          </li>
          <li>
            <i class="devicon-twitter-plain"></i>
          </li>
        </ul> */}
      </div>
      <ParticleContainer />
    </>
  );
}

export default HeaderContent;
