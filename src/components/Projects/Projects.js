import React from 'react';
import Project from '../Project/Project';
import flutterImg from '../../shared/images/flutter.png';
import landingPageImg from '../../shared/images/LandingPage.png';
import gm24Img from '../../shared/images/gm24.png';
import statusCodeImg from '../../shared/images/statusCodeImg.png';

function Projects(props) {
  return (
    <>
      <h1 className="text-center p-5">My Projects</h1>
      <Project
        imageFirst={false}
        imgsrc={flutterImg}
        title="Flutter ChatApp"
        description="A flutter application using Firebase for college confession."
        techList={['Dart', 'Firebase']}
      />
      <Project
        imageFirst={true}
        imgsrc={landingPageImg}
        title="Landing Page Template"
        description="A simple and elegant customizable landing page for companies."
        techList={['HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'JQuery']}
      />
      <Project
        imageFirst={false}
        imgsrc={gm24Img}
        title="Productivity Tracker"
        description="An mobile friendly application to track productivity."
        techList={['NodeJS', 'EJS', 'Heroku', 'JavaScript', 'SCSS']}
      />
      <Project
        imageFirst={true}
        imgsrc={statusCodeImg}
        title="Status Codes Cheatsheet"
        description="A cheatsheet for status code with meaning."
        techList={['Jekyll', 'MarkDown', 'Gitpages']}
      />
    </>
  );
}

export default Projects;
