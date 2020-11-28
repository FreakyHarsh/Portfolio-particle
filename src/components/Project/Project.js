import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import flutterImg from '../../shared/images/flutter.png';
import './Project.css';

function Project(props) {
  return (
    <div className="projects">
      <h2 className="text-center p-5">My Projects</h2>
      {props.imageFirst ? (
        <Container>
          <Row className="justify-content-center align-items-stretch">
            <Col sm={12} md={5} lg={4}>
              <img src={props.imgsrc} alt="Flutter app" className="project-image" />
            </Col>
            <Col sm={12} md={7} lg={4}>
              <div className="d-flex flex-column justify-content-center p-2 ml-lg-5">
                <div className="project-title">{props.title}</div>
                <div className="project-description">{props.description}</div>
                <ul className="project-tech">
                  {props.techList.forEach((tech) => {
                    return <li>tech</li>;
                  })}
                </ul>
                <button className="project-btn-live">Demo</button>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row className="justify-content-center align-items-stretch">
            <Col sm={12} md={5} lg={4}>
              <img src={props.imgsrc} alt="Flutter app" className="project-image" />
            </Col>
            <Col sm={12} md={7} lg={4}>
              <div className="d-flex flex-column justify-content-center p-2 ml-lg-5">
                <div className="project-title">Flutter ChatApp</div>
                <div className="project-description">A flutter application using Firebase for college confession.</div>
                <ul className="project-tech">
                  <li>Dart</li>
                  <li>Firebase</li>
                </ul>
                <button className="project-btn-live">Demo</button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Project;
