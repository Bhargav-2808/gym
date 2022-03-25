import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import gymV from './../../images/v2.jpg'
import "./about.css";

function About() {
  return (
    <>
      <Container className="mt-5">
      <Row className="mt-5"> 
          <Col className="d-flex justify-content-center">
            <h1>About<span style={{color:"#1b4a84"}}>Us</span></h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center ">
            <img className="vert-move"  src={gymV} alt="gym" width={390}/>
          </Col>
          <Col>
            <p className="d-flex justify-content-center mt-5 para" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis tortor in leo pretium tincidunt. Fusce blandit est justo, tincidunt porta urna congue vitae. Orci varius natoque penatibus et 
                magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mi dolor, pretium a leo eu, venenatis aliquet sem. Nulla facilisi. Suspendisse 
                potenti. Ut tristique lacinia nisl, tristique finibus odio volutpat ut. Sed eu congue urna. Fusce lacinia ante ac tempor convallis. Sed sed mi ut dui pharetra lobortis. Etiam feugiat libero id ipsum congue fermentum. Nam aliquam consectetur nisi eu euismod. Nulla sit amet rhoncus purus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis tortor in leo pretium tincidunt. Fusce blandit est justo, tincidunt porta urna congue vitae. Orci varius natoque penatibus</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
