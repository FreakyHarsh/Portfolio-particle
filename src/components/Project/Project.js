import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import flutterImg from '../../shared/images/flutter.png';
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
                <button className="project-btn-live">Demo</button>
              </div>
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
                    return <li>{tech}</li>;
                  })}
                </ul>
                <button className="project-btn-live">Demo</button>
              </div>
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
