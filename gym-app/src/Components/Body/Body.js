import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pricing from "./Pricing";
import "./body.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BodyTop from "./BodyTop";
import Chart_ from "./Chart_";
import About from "../About/About";


function Body() {
  let admin= localStorage.getItem("admin");
  console.log(typeof(admin));
  return (
    <>
      <BodyTop/>
      <About/>
  
      <Pricing />
      {/* <Chart_ /> */}
      
      
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
