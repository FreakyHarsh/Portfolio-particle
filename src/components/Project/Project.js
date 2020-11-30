import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

function Project(props) {
  return (
    <div className="projects mb-5">
      {props.imageFirst ? (
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={5} lg={4}>
              <img src={props.imgsrc} alt={props.title} className="project-image" />
            </Col>
            <Col sm={12} md={7} lg={4}>
              <div className="d-flex flex-column justify-content-center p-3 ml-lg-5">
                <div className="project-title">{props.title}</div>
                <div className="project-description">{props.description}</div>
                <ul className="project-tech">
                  {props.techList.map((tech) => {
                    return <li key={Math.random()}>{tech}</li>;
                  })}
                </ul>
              </div>
              <Link to={{ pathname: props.demoLink }} target="_blank" className="project-btn-live mr-2">
                Demo
              </Link>
              <Link to={{ pathname: props.githubLink }} target="_blank" className="project-btn-live">
                <i className="devicon-github-plain"></i> GitHub
              </Link>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={7} lg={4}>
              <div className="d-flex flex-column justify-content-center p-3 ml-lg-5">
                <div className="project-title">{props.title}</div>
                <div className="project-description">{props.description}</div>
                <ul className="project-tech">
                  {props.techList.map((tech) => {
                    return <li key={Math.random()}>{tech}</li>;
                  })}
                </ul>
              </div>
              <Link to={{ pathname: props.demoLink }} target="_blank" className="project-btn-live mr-2">
                Demo
              </Link>
              <Link to={{ pathname: props.githubLink }} target="_blank" className="project-btn-live">
                <i className="devicon-github-plain"></i> GitHub
              </Link>
            </Col>
            <Col sm={12} lg={4} xs={{ order: 'first' }} md={{ span: '4', order: 'last' }}>
              <img src={props.imgsrc} alt={props.title} className="project-image" />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Project;
