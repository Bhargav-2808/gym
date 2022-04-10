import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import abs from "./../../images/abs.jpg";
import arms from "./../../images/arms.jpg";
import chest from "./../../images/chest.jpg";
import legs from "./../../images/legs.jpg";
import shoulder from "./../../images/shoulder.jpg";

import Class from "./Class";
import "./classStyle.css";

function Gym() {
  return (
    <>
      <Class />
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Exercise</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={10}>
            <div className="timeline-container">
              <div className="event">
                <div className="event-date me-3">Sunday</div>
                <h2>Day 1 Chest</h2>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={chest} alt="gym" />
                  </Col>
                  <Col>
                    <ul>
                      <li>Flat bench barbell press – 4 sets of 8 – 12 reps</li>
                      <li>Incline dumbbell press – 4 sets of 8 – 12 reps</li>
                      <li>Incline dumbbell flyes – 3 sets of 10 rep</li>
                      <li>Push-ups – 4 sets of 20 rep</li>
                    </ul>
                  </Col>
                </Row>
              </div>

              <div className="event">
                <div className="event-date">Monday</div>
                <h2>Day 2 Shoulders</h2>
                <Row className="mt-3">
                  <Col>
                    <ul>
                      <li>
                        Seated dumbbell shoulder press – 4 sets of 12 reps
                      </li>
                      <li>
                        Standing barbell military press – 4 sets of 10 -12 reps
                      </li>
                      <li>
                        Dumbbell lateral raises – 4 sets of 12 repsDumbbell
                        lateral raises – 4 sets of 12 reps
                      </li>
                      <li>Rear deltoid flyes – 3 sets of 15 rep</li>
                    </ul>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={shoulder} alt="gym" />
                  </Col>
                </Row>
              </div>

              <div className="event">
                <div className="event-date">Tuesday</div>
                <h2>Day 3 Legs</h2>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={legs} alt="gym" />
                  </Col>
                  <Col>
                    <ul>
                      <li>Barbell squats – 4 sets of 8 – 10 reps</li>
                      <li>Hack squats – 4 sets of 10 reps</li>
                      <li>Leg press machine – 3 sets of 10 reps</li>
                      <li>Hamstring curls – 3 sets of 10 reps</li>
                    </ul>
                  </Col>
                </Row>
              </div>

              <div className="event">
                <div className="event-date">Wednesday</div>
                <h2>Day 4 Back and Abs</h2>
                <Row className="mt-3">
                  <Col>
                    <ul>
                      <li>Chin-ups – 4 sets of 10 reps</li>
                      <li>Wide grip lat pull-downs – 4 sets of 12 reps</li>
                      <li>Close grip lat pull-downs – 4 sets of 12 reps</li>
                      <li>Barbell bent over rows – 4 sets of 8 reps</li>
                    </ul>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={abs} alt="gym" />
                  </Col>
                </Row>
              </div>
              <div className="event">
                <div className="event-date">Thursday</div>
                <h2>Day 5 Arms (biceps, triceps</h2>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-center">
                    <img className="img-style" src={arms} alt="gym" />
                  </Col>
                  <Col>
                    <ul>
                      <li>Double arm dumbbell curls = 4 sets 10 – 12 reps</li>
                      <li>Triceps rope pushdowns – 4 sets of 15 reps</li>
                      <li>Preacher curl machine – 4 sets of 12 reps</li>
                      <li>Skull crushers – 4 sets of 10 reps</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="event">
                <div className="event-date">friday</div>
                <h2>Rest</h2>
                <div className="timeline-content">
                  <p>
                    Basically, when you follow a 7 day split, you use your two
                    additional training days, to bring up lagging body parts and
                    muscle groups, or to help you reach your goals much quicker.
                    So, if for example, you feel that your chest is lagging in
                    comparison to the rest of your body, you would train your
                    chest on day 6 perhaps, repeating the same chest workout
                    from day 1
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

export default Gym;
