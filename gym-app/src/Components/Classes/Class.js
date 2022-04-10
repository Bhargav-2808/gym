import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./class.css";

function Class() {
  return (
    <>
      <Container className="mt-5 mb-5" >
        <Row>
          <Col className="d-flex justify-content-center"> 
            <Link to="/class/gym">
              <Button className="preButton me-2">Exercise</Button>
            </Link>
            <Link to="/class/yoga">
              <Button className="preButton me-2">Yoga</Button>
            </Link>
            <Link to="/class/zumba">
              <Button className="preButton me-2">Zumba</Button>
            </Link>
            <Link to="/class/cardio">
              <Button className="preButton me-2">Cardio</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Class;
