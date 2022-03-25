import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pricing from "./Pricing";
import "./body.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BodyTop from "./BodyTop";
import Chart_ from "./Chart";
import About from "../About/About";

function Body() {
  return (
    <>
      <BodyTop/>
      <About/>
      <Pricing />
      <Chart_ />
      
      
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
