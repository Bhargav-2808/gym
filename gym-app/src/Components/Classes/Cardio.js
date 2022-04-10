import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import c1 from "./../../images/c1.jpg";
import c2 from "./../../images/c2.jpg";
import c3 from "./../../images/c3.jpg";
import c4 from "./../../images/c4.jpg";
import c5 from "./../../images/c5.jpg";

import Class from "./Class";
import "./classStyle.css";

function Cardio() {
  return (
    <>
      <Class />
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Cardio</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={10}>
            <div className="timeline-container">
              <div className="event">
                <div className="event-date me-3">Sunday</div>
                <h2>Day 1 Single leg stand</h2>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={c1} alt="gym" />
                  </Col>
                  <Col>
                    <ul>
                      <li>
                        Start with the feet together or no more than 3 inches
                        (in) apart.
                      </li>
                      <li>
                        Bend the knees slightly and lift one leg 3–6 in off the
                        floor.
                      </li>
                      <li>
                        Hold this position for 10–15 seconds and return the foot
                        to the floor.
                      </li>
                      <li>Repeat for the opposite leg</li>
                    </ul>
                  </Col>
                </Row>
              </div>

              <div className="event">
                <div className="event-date">Monday</div>
                <h2>Day 2 Arm circles</h2>
                <Row className="mt-3">
                  <Col>
                    <ul>
                      <li>
                        Rotate the arms in a circular motion, both clockwise and
                        counterclockwise. The movement may resemble a butterfly
                        or backstroke.
                      </li>
                      <li>
                        If a person has limited mobility in their arms, they can
                        extend their arms to their sides and draw small circles.
                      </li>
                    </ul>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={c2} alt="gym" />
                  </Col>
                </Row>
              </div>

              <div className="event">
                <div className="event-date">Tuesday</div>
                <h2>Day 3 Jumping jacks</h2>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={c3} alt="gym" />
                  </Col>
                  <Col>
                    <ul>
                      <li>
                        Begin with the feet hip-width apart and arms down.
                      </li>
                      <li>
                        Raise the arms out to the sides, straight in the air
                        while jumping out with the feet apart.
                      </li>
                      <li>
                        Jump back into the starting position and land softly on
                        the balls of the feet, bringing the arms back into the
                        body.
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>

              <div className="event">
                <div className="event-date">Wednesday</div>
                <h2>Day 4 Squat jumps</h2>
                <Row className="mt-3">
                  <Col>
                    <ul>
                      <li>
                        Stand with the feet hip-width apart and arms at the
                        sides.
                      </li>
                      <li>Bend at the knees to squat.</li>
                      <li>
                        From the squat position, jump in the air and extend the
                        hips until the body is straight.
                      </li>
                      <li>
                        Land softly on the balls of the feet, rolling backward
                        to absorb the shock in the heels.
                      </li>
                    </ul>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={c4} alt="gym" />
                  </Col>
                </Row>
              </div>
              <div className="event">
                <div className="event-date">Thursday</div>
                <h2>Day 5 Trunk rotation</h2>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={c5} alt="gym" />
                  </Col>
                  <Col>
                    <ul>
                      <li>
                        Stand with a heavy object at chest height with elbows to
                        the sides.
                      </li>
                      <li>
                        Twist from the torso, turning to one side, then the
                        other.
                      </li>
                      <li>
                        A person can also hold the arms at shoulder height and
                        twist side to side.
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="event">
                <div className="event-date">saturday</div>
                <h2>Rest</h2>
                <div className="timeline-content">
                  <p>
                    Basically, when you follow a 7 day split, you use your two
                    additional training days, to bring up lagging body parts and
                    muscle groups, or to help you reach your goals much quicker.
                  </p>
                </div>
              </div>
              <div className="event">
                <div className="event-date">saturday</div>
                <h2>Rest</h2>
                <div className="timeline-content">
                  <p>Take rest to rehabe your body</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cardio;
