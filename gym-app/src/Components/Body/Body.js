import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pricing from "./Pricing";
import "./body.css";
import Chart from "./Chart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BodyTop from "./BodyTop";

function Body() {
  return (
    <>
      <BodyTop/>
      <Pricing />
      {/* <Chart /> */}
      
      
      {/* <Container fluid style={{}}>
        <div className="back">
          <Row>
            <Col></Col>
          </Row>
        </div>
      </Container> */}
    </>
  );
}

export default Body;
