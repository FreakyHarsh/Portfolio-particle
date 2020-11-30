import React from 'react';
import 'font-awesome/css/font-awesome.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './HeaderContent.css';
import ParticleContainer from '../ParticleContainer/ParticleContainer';

function HeaderContent(props) {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return (
      <a className="header-contactlist-iconwrapper" href={`mailto:${email}${params}`}>
        {children}
      </a>
    );
  };
  return (
    <>
      <div className="header-main">
        <div className="header-name">
          Harsh <span className="fix-surname">Boricha</span>
        </div>
        <div className="header-role">SOFTWARE DEVELOPER</div>
        <ul className="header-contactlist d-flex justify-content-center">
          <li className="mr-2">
            <Mailto email="harsh.boricha2015@gmail.com" subject="Contact through Portfolio" body="Hello Harsh,I really like your Online Portfolio.">
              <i className="fa fa-envelope px-2"></i>
            </Mailto>
          </li>
          <li className="mr-2">
            <Link to={{ pathname: 'https://www.instagram.com/freaky_harsh/' }} target="_blank" className="header-contactlist-iconwrapper">
              <i className="fa fa-instagram px-2" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to={{ pathname: 'https://www.linkedin.com/in/harsh-boricha-0a0a14197/' }}
              target="_blank"
              className="header-contactlist-iconwrapper"
            >
              <i className="fa fa-linkedin px-2"></i>
            </Link>
          </li>
          <li className="mr-2">
            <Link to={{ pathname: 'https://github.com/FreakyHarsh' }} target="_blank" className="header-contactlist-iconwrapper">
              <i className="fa fa-github-alt px-2"></i>
            </Link>
          </li>
        </ul>
        <div className="text-center">
          <HashLink smooth to="./#about-me" className="header-navlink mr-3">
            About me
          </HashLink>
          <HashLink smooth to="./#my-projects" className="header-navlink">
            Projects
          </HashLink>
        </div>
      </div>
      <ParticleContainer />
    </>
  );
}

export default HeaderContent;
