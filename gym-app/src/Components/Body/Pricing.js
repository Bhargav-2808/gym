import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Pricing() {
  return (
    <>
      <Container className="py-5">
        <Row className="mt-3"> 
          <Col className="d-flex justify-content-center">
            <h1>Our <span style={{color:"#1b4a84"}}>Pricing</span></h1>
          </Col>
        </Row>
        <Row className=" text-center align-items-end mt-2">
          <Col className="col-lg-4 mb-3 mb-lg-0">
            <div className="bg-white p-3 rounded-lg shadow">
              <h1 className="h6 text-uppercase font-weight-bold mb-2">Basic</h1>
              <h2 className="h1 font-weight-bold">
                100 ₹
                <span className="text-small font-weight-normal ml-2">
                  / month
                </span>
              </h2>

              

              <ul className="list-unstyled my-5 text-small text-left">
                <li className="mb-3">
                  Lorem ipsum
                  dolor sit amet
                </li>
                <li className="mb-3">
                  Sed ut
                  perspiciatis
                </li>
                <li className="mb-3">
                   At vero eos
                  et accusamus
                </li>
              
              </ul>
              <a
                href="#"
                className="btn  btn-block p-2 shadow rounded-pill"
                style={{backgroundColor:"#1b4a84",color:"white"}}
              >
                Subscribe
              </a>
            </div>
          </Col>

          <Col className="col-lg-4 mb-3 mb-lg-0" style={{backgroundColor:"#a5b3c0"}}>
            <div className="bg-white p-4 rounded-lg shadow">
              <h1 className="h6 text-uppercase font-weight-bold mb-2">Standard</h1>
              <h2 className="h1 font-weight-bold">
                100 ₹
                <span className="text-small font-weight-normal ml-2">
                  / month
                </span>
              </h2>

             

              <ul className="list-unstyled my-5 text-small text-left">
                <li className="mb-3">
                  Lorem ipsum
                  dolor sit amet
                </li>
                <li className="mb-3">
                  Sed ut
                  perspiciatis
                </li>
                <li className="mb-3">
                   At vero eos
                  et accusamus
                </li>
              
              </ul>
              <a
                href="#"
                className="btn  btn-block p-2 shadow rounded-pill"
                style={{backgroundColor:"#1b4a84",color:"white"}}
              >
                Subscribe
              </a>
            </div>
          </Col>

          <Col className="col-lg-4 mb-3 mb-lg-0">
            <div className="bg-white p-3 rounded-lg shadow">
              <h1 className="h6 text-uppercase font-weight-bold mb-2">Premium</h1>
              <h2 className="h1 font-weight-bold">
                100 ₹
                <span className="text-small font-weight-normal ml-2">
                  / month
                </span>
              </h2>

             

              <ul className="list-unstyled my-5 text-small text-left">
                <li className="mb-3">
                  Lorem ipsum
                  dolor sit amet
                </li>
                <li className="mb-3">
                  Sed ut
                  perspiciatis
                </li>
                <li className="mb-3">
                   At vero eos
                  et accusamus
                </li>
              
              </ul>
              <a
                href="#"
                className="btn  btn-block p-2 shadow rounded-pill"
                style={{backgroundColor:"#1b4a84",color:"white"}}
              >
                Subscribe
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pricing;
