import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import y1 from "./../../images/y1.jpg";
import y2 from "./../../images/y2.jpg";
import y3 from "./../../images/y3.jpg";
import y4 from "./../../images/y4.png";
import y5 from "./../../images/y5.jpg";
import y6 from "./../../images/y6.jpg";
import padma from "./../../images/padma.jpg";

import Class from "./Class";
import "./classStyle.css";

function Yoga() {
  return (
    <>
      <Class />
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Top Yoga</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={9}>
            <div className="timeline-container">
              <div className="event">
                <div className="event-date me-3">1)</div>
                <h2>Standing Side Bend</h2>
                <Row className="mt-3">
                  <Col>
                    <p>
                    Whether you just woke up, or got up from your desk for the first time in hours, a good move to lean into (literally) is a standing side bend. Raise your hands up over your head, with your palms touching and fingers pointing up to the sky. Slowly bend to one side, reaching up, engaging your core and glutes, breathing slowly. Make sure your feet are firmly planted on the ground and hold for 5–10 seconds (as long as is comfortable) and then switch sides. Repeat as often as you like.
                    </p>
                  </Col>
                  <Col>
                    <img src={y1} alt="gym" />
                  </Col>
                </Row>
              </div>

              <div className="event">
                <div className="event-date">2)</div>
                <h2>Standing Forward Fold</h2>
                <Row className="mt-3">
                  <Col>
                    <p>
                    Take a bow, because you’re awesome! No, but really, it’s great to stop and take a bow, or practice standing forward fold, a couple times a day just to keep blood running throughout your body and to recenter yourself. From standing (mountain pose), bend at the waist, bringing your hands to the floor. Keep your body loose, and bend your knees if it helps you bring your palms closer to the floor. The goal is to get your face near your knees. When you come out of the pose, do it slowly, rolling up so that your head comes up last. Breath calmly and steadily throughout.
                    </p>
                  </Col>
                  <Col>
                    <img src={y2} alt="gym" />
                  </Col>
                </Row>
              </div>

              <div className="event">
                <div className="event-date">3)</div>
                <h2>Downward Dog</h2>
                <Row className="mt-3">
                <Col>
                    <p>
                    We all know how good this feels, especially after a long night’s sleep, or a long day at the office. It’s best to get into this position from table pose, so start on your hands and knees. Then, tucking your toes under your feet, and spreading your fingers wide, push your hips up and reach through your tailbone. Be careful not to lock your arms, and remember to let your head hang loosely. This is all about finding a comfortable place to just be and breathe, so pay attention to your form and hang out here for a while.
                    </p>
                  </Col>
                  <Col>
                    <img src={y3} alt="gym" />
                  </Col>
                </Row>
              </div>

              <div className="event">
                <div className="event-date">4)</div>
                <h2>Cat and Cow Pose</h2>
                <Row className="mt-3">
                <Col>
                    <p>
                    Cat and cow poses are so connected that they could even be considered one pose — we always like to do them together to stretch out our back muscles. Starting in table pose, glide into cat pose, first, by rounding your back as you tuck your tailbone in, and lower your head. Engage your abdominal muscles, picturing a string pulling your belly button through your back and up to the ceiling, lifting you higher. Breathe into this pose, then release for cow. Lift your head and tailbone, letting your back gently round downward. 
                    </p>
                  </Col>
                  <Col>
                    <img src={y4} alt="gym" />
                  </Col>
                </Row>
              </div>
              <div className="event">
                <div className="event-date">5)</div>
                <h2>Cobra</h2>
                <Row className="mt-3">
                <Col>
                    <p>
                    While we’re talking about our favorite poses named for animals, let’s give a shout-out to Cobra pose. Open your chest and stretch your shoulder muscles by lying on your stomach, then pushing off the ground with your hands. The tops of your feet should lay flat on the ground, and your eyes should rest on the horizon, not look up.
                    </p>
                  </Col>
                  <Col>
                    <img src={y5} alt="gym" />
                  </Col>
                </Row>
              </div>
              <div className="event">
                <div className="event-date">6)</div>
                <h2>Seated Forward Fold</h2>
                <Row className="mt-3">
                <Col>
                    <p>
                    The back of your body needs love, too! And if you need a moment of peace, seated forward fold (sometimes called seated forward bend) is a great way to stretch and destress, simultaneously. Simply sit with your legs extended, then bend at your hips, lowering your torso forward, stretching your arms out so that your hands rest upon (or near) your toes and feet. Over time, you want to get your stomach and chest to lay flat against your legs, but ease into it when practicing this pose solo, without the warm-up a class provides.
                    </p>
                  </Col>
                  <Col>
                    <img src={y6} alt="gym" />
                  </Col>
                </Row>
              </div>
              <div className="event">
                <div className="event-date">7)</div>
                <h2>Padmasana</h2>
                <Row className="mt-3">
                <Col>
                    <p>
                    Padmasana or Lotus position is a cross-legged yoga posture which helps deepen meditation by calming the mind and alleviating various physical ailments. A regular practice of this posture aids in overall blossoming of the practitioner, just like a lotus; and hence the name Padmasana. In Chinese and Tibetan Buddhism, the Lotus pose is also known as Vajra position.
                    </p>
                  </Col>
                  <Col>
                    <img src={padma} alt="gym" />
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

export default Yoga;
