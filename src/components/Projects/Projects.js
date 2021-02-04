import './Projects.css';
import React from 'react';
import 'font-awesome/css/font-awesome.css';
import { HashLink } from 'react-router-hash-link';
import Zoom from 'react-reveal/Zoom';

import Project from '../Project/Project';
import flutterImg from '../../shared/images/flutter.png';
import landingPageImg from '../../shared/images/LandingPage.png';
import gm24Img from '../../shared/images/gm24.png';
import funWithFlags from '../../shared/images/funWithFlags.png';

function Projects(props) {
  return (
    <div className='projects' id='my-projects'>
      <h1 className='text-center py-5'>
        <Zoom top>MY PROJECTS</Zoom>
      </h1>
      <Zoom right>
        <Project
          imageFirst={false}
          imgsrc={funWithFlags}
          title='Fun With Flags'
          description='A React Website to get information of various countries.'
          techList={['ReactJS', 'ChakraUI', 'ContextAPI', 'TypeScript']}
          demoLink='https://funwithflags-1e7a2.web.app/'
          githubLink='https://github.com/FreakyHarsh/worldFlags'
        />
      </Zoom>
      <Zoom left>
        <Project
          imageFirst={true}
          imgsrc={landingPageImg}
          title='Landing Page Template'
          description='A simple and elegant customizable landing page for companies.'
          techList={['HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'JQuery']}
          demoLink='https://freakyharsh.github.io/Bootstrap-UI-template/'
          githubLink='https://github.com/FreakyHarsh/Bootstrap-UI-template'
        />
      </Zoom>
      <Zoom right>
        <Project
          imageFirst={false}
          imgsrc={gm24Img}
          title='Productivity Tracker'
          description='An mobile friendly application to track productivity.'
          techList={['NodeJS', 'MongoDB', 'EJS', 'Heroku', 'JavaScript', 'SCSS']}
          demoLink='https://god-mode-24.herokuapp.com/'
          githubLink='https://github.com/FreakyHarsh/GM24'
        />
      </Zoom>
      <Zoom left>
        <Project
          imageFirst={true}
          imgsrc={flutterImg}
          title='Flutter ChatApp'
          description='A flutter application using Firebase for college confession.'
          techList={['Flutter', 'Dart', 'Firebase']}
          demoLink='https://drive.google.com/file/d/1-3_T7O1hgR3wke43lw12jg9JkB84tBxe/view?usp=sharing'
          githubLink='https://github.com/FreakyHarsh/Flutter-Confession-App'
        />
      </Zoom>
      <div className='d-flex justify-content-end'>
        <HashLink to='#top' smooth className='top' title='TOP'>
          <i className='icon fa fa-arrow-up px-2'></i>
        </HashLink>
      </div>
      <br />
    </div>
  );
}

export default Projects;
