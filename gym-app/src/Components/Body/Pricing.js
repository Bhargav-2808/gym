import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";

function Pricing() {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <>
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Payment Receipt</Modal.Title>
        </Modal.Header>

        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="py-5">
        <Row className="mt-1">
          <Col className="d-flex justify-content-center">
            <h1>
              Our <span style={{ color: "#1b4a84" }}>Pricing</span>
            </h1>
          </Col>
        </Row>
        <Row className=" text-center align-items-end mt-5">
          <Col className="col-lg-4 mb-3 mb-lg-0">
            <div className="bg-white p-3 rounded-lg shadow">
              <h1 className="h6 text-uppercase font-weight-bold mb-3 mt-3">
                Basic
              </h1>
              <h2 className="h1 font-weight-bold mb-3 mt-3">
                4999 ₹
                <span className="text-small font-weight-normal ml-2">
                  / Year
                </span>
              </h2>

              <a
                href="#"
                className="btn  btn-block p-3 shadow rounded-pill mb-3 mt-3"
                style={{
                  backgroundColor: "#1b4a84",
                  color: "white",
                  border: "1px solid white",
                }}
                onClick={handleShow1}
              >
                Join now
              </a>
            </div>
          </Col>

          <Col
            className="col-lg-4 mb-3 mb-lg-0 "
            style={{ backgroundColor: "#a5b3c0" }}
          >
            <div className="bg-white p-4 rounded-lg shadow">
              <h1 className="h6 text-uppercase font-weight-bold mb-3 mt-3">
                Standard
              </h1>
              <h2 className="h1 font-weight-bold mb-3 mt-3">
                9999 ₹
                <span className="text-small font-weight-normal ml-2">
                  / Year
                </span>
              </h2>
              <a
                href="#"
                className="btn  btn-block p-3 shadow rounded-pill mb-3 mt-3"
                style={{
                  backgroundColor: "white",
                  color: "#1b4a84",
                  border: "1px solid #1b4a84",
                }}
                onClick={handleShow1}
              >
                Join now
              </a>
            </div>
          </Col>

          <Col className="col-lg-4 mb-3 mb-lg-0">
            <div className="bg-white p-3 rounded-lg shadow">
              <h1 className="h6 text-uppercase font-weight-bold mb-3 mt-3">
                Premium
              </h1>
              <h2 className="h1 font-weight-bold mb-3 mt-3">
                14999 ₹
                <span className="text-small font-weight-normal ml-2">
                  / Year
                </span>
              </h2>

              <a
                href="#"
                className="btn  btn-block p-3 shadow rounded-pill mb-3 mt-3"
                style={{
                  backgroundColor: "#1b4a84",
                  color: "white",
                  border: "1px solid white",
                }}
                onClick={handleShow1}
              >
                Join now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pricing;
