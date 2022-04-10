import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import zumba from "./../../images/zumba.svg";

import Class from "./Class";
import "./classStyle.css";

function Zumba() {
  return (
    <>
      <Class />
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Zumba</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <img className="img-style" src={zumba} alt="zumba" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={10}>
            <div className="timeline-container">
              <div className="event">
                <div className="event-date me-3">Zumba</div>
                <h2>Zumba Workout</h2>
                <Row className="mt-3">
                  <Col>
                    <p>
                      How It Works Grooving to the beats of salsa, flamenco, and
                      merengue music feels more like a dance party than a
                      workout, which is exactly what makes Zumba so popular. The
                      Latin-inspired dance workout is one of the most popular
                      group exercise classes in the world. The high-energy
                      classes are set to upbeat music and feature choreographed
                      dance numbers that you might see in a nightclub. You don’t
                      need to be a great dancer to feel welcome in a Zumba
                      class. With the tag line, “Ditch the Workout, Join the
                      Party,” the classes emphasize moving to the music and
                      having a good time, no rhythm required. There are several
                      different kinds of Zumba classes, from Aqua Zumba workouts
                      to classes like Zumba Toning that incorporate weights for
                      additional calorie burning and strength training. There
                      are even Zumba classes for kids. Working up a sweat in the
                      60-minute classes burns an average of 369 calories -- more
                      than cardio kickboxing or step aerobics. You’ll get a
                      great cardio workout that melts fat, strengthens your
                      core, and improves flexibility.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Zumba;
