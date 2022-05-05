import React, { useState, createRef } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import Pdf from "react-to-pdf";

const ref = createRef();
function Pricing() {
  const [amount, setAmount] = useState(null);

  var data = sessionStorage.getItem("logdetails");
  var data1 = JSON.parse(data);
  console.log(data1);
  const name = data1?.data?.user?.name;
  const email = data1?.data?.user?.email;
  const mobile = data1?.data?.user?.mobile;
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(date, time);

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
        size="sm"
      >
        
          <Modal.Header>
            <Modal.Title>Your Payment Receipt</Modal.Title>
          </Modal.Header>

          {
            data1?(<Modal.Body>
            <Card style={{ width: "17rem" }} className="pay-card">
              <Card.Body ref={ref}>
                <Card.Title>Name : {name}</Card.Title>
                <p>Email : {email}</p>
                <p>Mobile No : {mobile}</p>
                <Card.Text>Date : {date}</Card.Text>
                <p>Time of Payment : {time}</p>
                <p>Payment Amount : {amount}</p>
                <p>Payment Status : Done</p>
              </Card.Body>
            </Card>
          </Modal.Body>):(<Modal.Body>Please Login for Payment !</Modal.Body>)
}
          

        {
          data1?(<Modal.Footer className="d-flex justify-content-center">
          <Pdf targetRef={ref} filename="payment.pdf">
            {({ toPdf }) => (
              <button className="pdfDownload" onClick={toPdf}>
                Download Receipt
              </button>
            )}
          </Pdf>
        
        </Modal.Footer>):<></>
        }
        
        <Button onClick={handleClose1}>Close</Button>
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

              <button
                href="#"
                className="join-button-1 mt-4 mb-4"
              
                onClick={() => {
                  setAmount(4900);
                  handleShow1();
                }}
              >
                Join Now
              </button>
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
              <button
                href="#"
                className="join-button-2 mt-4 mb-4"
                onClick={() => {
                  setAmount(9999);
                  handleShow1();
                }}
              >
                Join Now
              </button>
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

              <button
                href="#"
                className="join-button-1 mt-4 mb-4"
                onClick={() => {
                  setAmount(14999);
                  handleShow1();
                }}
              >
                Join Now
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pricing;
