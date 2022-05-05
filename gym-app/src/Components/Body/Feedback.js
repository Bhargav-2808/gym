import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addfeedback } from "../../api";

const Feedback = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let response = await addfeedback(data);
    // let response = await RegisterUser(data);
    if (response) {
      navigate("/");
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            {" "}
            <h2> Feedback Form</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={9}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                  />
                  <Form.Label className="mt-3">Feedback</Form.Label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea4"
                    rows="3"
                    name="feedback"
                    {...register("feedback", {
                        required: true,
                        min:3,
                        max:100
                      })}
                  ></textarea>
                </Form.Group>
              </Row>
              <button className="join-button-1 mt-4 mb-4" type="submit">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Feedback;
