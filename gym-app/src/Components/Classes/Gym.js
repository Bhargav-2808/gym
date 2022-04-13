import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import abs from "./../../images/abs.jpg";
import arms from "./../../images/arms.jpg";
import chest from "./../../images/chest.jpg";
import legs from "./../../images/legs.jpg";
import shoulder from "./../../images/shoulder.jpg";
import g11 from "./../../images/g11.jpg";
import g12 from "./../../images/g12.jpg";
import g13 from "./../../images/g13.jpg";
import g14 from "./../../images/g14.jpg";
import g21 from "./../../images/g21.jpg";
import g22 from "./../../images/g22.png";
import g23 from "./../../images/g23.png";
import g24 from "./../../images/g24.jpg";
import g31 from "./../../images/g31.jpg";
import g32 from "./../../images/g32.jpg";
import g33 from "./../../images/g33.jpg";
import g34 from "./../../images/g34.jpg";
import g41 from "./../../images/g41.jpg";
import g42 from "./../../images/g42.jpg";
import g43 from "./../../images/g43.jpg";
import g44 from "./../../images/g44.png";
import g51 from "./../../images/g51.jpg";
import g52 from "./../../images/g52.jpg";
import g53 from "./../../images/g53.jpg";
import g54 from "./../../images/g54.jpg";


import Class from "./Class";
import "./classStyle.css";

function Gym() {
  const data = {
    t1: "Flat bench barbell press – 4 sets of 8 – 12 reps",
    t2: "Incline dumbbell press – 4 sets of 8 – 12 reps",
    t3: "Incline dumbbell flyes – 3 sets of 10 rep",
    t4: "Push-ups – 4 sets of 20 rep",
    t5: "Seated dumbbell shoulder press – 4 sets of 12 reps",
    t6: "Standing barbell military press – 4 sets of 10 -12 reps",
    t7: "Dumbbell lateral raises – 4 sets of 12 repsDumbbell lateral raises – 4 sets of 12 reps",
    t8: "Rear deltoid flyes – 3 sets of 15 rep",
    t9: "Barbell squats – 4 sets of 8 – 10 reps",
    t10: "Hack squats – 4 sets of 10 reps",
    t11: "Leg press machine – 3 sets of 10 reps",
    t12: "Hamstring curls – 3 sets of 10 reps",
    t13: "Chin-ups – 4 sets of 10 reps",
    t14: "Wide grip lat pull-downs – 4 sets of 12 reps",
    t15: "Close grip lat pull-downs – 4 sets of 12 reps",
    t16: "Barbell bent over rows – 4 sets of 8 reps",
    t17: "Double arm dumbbell curls = 4 sets 10 – 12 reps",
    t18: "Triceps rope pushdowns – 4 sets of 15 reps",
    t19: "Preacher curl machine – 4 sets of 12 reps",
    t20: "Skull crushers – 4 sets of 10 reps",

    d1: "Lie on your back on a flat bench. Grip a barbell with hands slightly wider than shoulder width. The bar should be directly over the shoulders. Press your feet firmly into the ground and keep your hips on the bench throughout the entire movement",
    d2: "The incline dumbbell press, also known as the incline chest press and the incline dumbbell bench press, is an upper body workout that engages the pectoral muscles in your chest, the triceps on the backside of your arms, and the anterior deltoid muscles on the front of your shoulders.",
    d3: "The incline dumbbell fly is an isolation exercise that targets the upper chest muscles, activating the hard-to-develop upper pecs in a way that can't be achieved by using a flat bench. 1 Add it to your chest strengthening workout for more variety. Also Known As: Incline chest fly, incline pec fly.",
    d4: "Push-ups are exercises to strengthen your arms and chest muscles. They are done by lying with your face towards the floor and pushing with your hands to raise your body until your arms are straight.",
    d5: "Sit on the bench holding two dumbbells at shoulder height with an overhand grip. Press the weights up above your head until your arms are fully extended. Return slowly to the start position",
    d6: "Take a grip shoulder width apart and roll your elbows directly under the bar so they are in line with your wrists. Lift the bar out of the rack and rest it on your shoulders, then take two steps back. Make sure your feet are directly under your hips.",
    d7: "A lateral raise is a strength training shoulder exercise characterized by lifting a pair of dumbbells away from your body in an external rotation. Lateral raises work the trapezius muscle in your upper back as well as the deltoid muscle group in your shoulders—particularly the anterior and lateral deltoids.",
    d8: "What Is the Rear Delt Fly? The rear delt fly, also known as the rear delt raise or the bent-over dumbbell reverse fly, is a weight training exercise that targets your upper back muscles and shoulder muscles, particularly the posterior deltoids, or rear deltoids, on the backside of your shoulders.",
    d9: "A barbell squat, also known as a barbell back squat, is a compound exercise that activates muscle groups throughout your lower body, including your hamstrings, glutes, and lower back muscles. Perform barbell squats by standing with your feet shoulder-width apart",
    d10: "A hack squat works the entire lower body — including the glutes, hamstrings, quads, and calves — as well as the core. An emphasis on the quads means the front of your legs will be feeling it afterward.",
    d11: "The leg press, a type of resistance training exercise, is an excellent way to strengthen your legs. It's done by pushing your legs against weights on a leg press machine. Like all strength training exercises, leg presses build muscle, reduce the risk of injury, and counteract age-related muscle loss.",
    d12: "The leg curl, also known as the hamstring curl, is an isolation exercise that targets the hamstring muscles. The exercise involves flexing the lower leg against resistance towards the buttocks. There are three types of leg curls. There are seated leg curls, lying leg curls, and standing leg curls.",
    d13: "The chin-up is a strength training exercise. People frequently do this exercise with the intention of strengthening muscles such as the latissimus dorsi and biceps, which extend the shoulder and flex the elbow, respectively. In this maneuver, the palms are faced towards the body.",
    d14: "Choose your weight and sit on the lat pull-down machine, adjusting it so that your thighs fit under the supports.Grasp the bar with a pronated (overhand) grip, with your hands more than shoulder-width apart.",
    d16: "A bent-over row is a weight training exercise that targets a variety of back muscles. Which ones are targeted varies on form. The bent over row is often used for both bodybuilding and powerlifting. It is a good exercise for increasing strength and size",
    d17: "Double arm dumbbell bicep curls. … More. Alternating from out wide, straight out in front then inside shoulder width. Each curl equals one rep, so after hitting all three positions, that gets you three reps ",
    d18: "A push-down is a strength training exercise used for strengthening the triceps muscles in the back of the arm. The exercise is completed by pushing an object downward against resistance. This exercise is an example of the primary function of the triceps, extension of the elbow joint.",
    d15: "Start with your arms straight and torso either vertical or leaning back slightly. Pull the handle to your chest, while pushing your chest out to meet it. Don't lean back any farther. Pause, feel the squeeze in your arms and back, slowly return to the starting position, and repeat.",
    d19: "Sit on the preacher bench and adjust the height so your armpits are just touching the top of the sloped section. Hold the weight using an underhand grip (palms facing up) with your arms extended and your upper arms resting on the bench. Curl the weight up, keeping your upper arms on the bench, until your forearms are vertical. Pause for a second at the top of the curl, then slowly lower the weight until your arms are fully extended once again.",
    d20: "Lying triceps extensions, also known as skull crushers and French extensions or French presses, are a strength exercise used in many different forms of strength training. Lying triceps extensions are one of the most stimulating exercises to the entire triceps muscle group in the upper arm.",
  };

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);
  const [show14, setShow14] = useState(false);
  const [show15, setShow15] = useState(false);
  const [show16, setShow16] = useState(false);
  const [show17, setShow17] = useState(false);
  const [show18, setShow18] = useState(false);
  const [show19, setShow19] = useState(false);
  const [show20, setShow20] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleClose5 = () => setShow5(false);
  const handleClose6 = () => setShow6(false);
  const handleClose7 = () => setShow7(false);
  const handleClose8 = () => setShow8(false);
  const handleClose9 = () => setShow9(false);
  const handleClose10 = () => setShow10(false);
  const handleClose11 = () => setShow11(false);
  const handleClose12 = () => setShow12(false);
  const handleClose13 = () => setShow13(false);
  const handleClose14 = () => setShow14(false);
  const handleClose15 = () => setShow15(false);
  const handleClose16 = () => setShow16(false);
  const handleClose17 = () => setShow17(false);
  const handleClose18 = () => setShow18(false);
  const handleClose19 = () => setShow19(false);
  const handleClose20 = () => setShow20(false);

  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);
  const handleShow5 = () => setShow5(true);
  const handleShow6 = () => setShow6(true);
  const handleShow7 = () => setShow7(true);
  const handleShow8 = () => setShow8(true);
  const handleShow9 = () => setShow9(true);
  const handleShow10 = () => setShow10(true);
  const handleShow11 = () => setShow11(true);
  const handleShow12 = () => setShow12(true);
  const handleShow13 = () => setShow13(true);
  const handleShow14 = () => setShow14(true);
  const handleShow15 = () => setShow15(true);
  const handleShow16 = () => setShow16(true);
  const handleShow17 = () => setShow17(true);
  const handleShow18 = () => setShow18(true);
  const handleShow19 = () => setShow19(true);
  const handleShow20 = () => setShow20(true);

  return (
    <>
      <div   className="mod">

     
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
         size="lg"
      
      
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t1}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g11} alt="gym" />
        </Modal.Body>{" "}
        <Modal.Body>
          <p>{data.d1}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t2}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g12} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d2}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t3}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g13} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d3}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show4}
        onHide={handleClose4}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t4}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g14} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d4}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show5}
        onHide={handleClose5}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t5}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g21} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d5}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show6}
        onHide={handleClose6}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t6}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g22} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d6}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show7}
        onHide={handleClose7}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t7}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g23} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d7}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show8}
        onHide={handleClose8}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t8}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g24} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d8}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show9}
        onHide={handleClose9}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t9}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g31} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d9}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose9}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show10}
        onHide={handleClose10}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t10}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g32} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d10}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose10}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show11}
        onHide={handleClose11}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t11}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g32} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d11}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose11}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show12}
        onHide={handleClose12}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t12}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g33} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d12}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose12}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show13}
        onHide={handleClose13}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t1}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g34} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d13}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose13}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show14}
        onHide={handleClose14}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t14}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g41} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d14}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose14}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show15}
        onHide={handleClose15}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t15}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g42} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d15}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose15}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show16}
        onHide={handleClose16}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t16}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g43} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d16}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose16}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show17}
        onHide={handleClose17}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t17}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g44} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d17}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose17}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show18}
        onHide={handleClose18}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t18}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g51} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d18}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose18}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show19}
        onHide={handleClose19}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data?.t19}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g52} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d19}</p>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose19}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show20}
        onHide={handleClose20}
        backdrop="static"
        keyboard={false}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.t20}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={g53} alt="gym" />
        </Modal.Body>
        <Modal.Body>
          <p>{data.d20}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose20}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

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
                      <li onClick={handleShow1} id="g11">
                        Flat bench barbell press – 4 sets of 8 – 12 reps
                      </li>
                      <li onClick={handleShow2}>
                        Incline dumbbell press – 4 sets of 8 – 12 reps
                      </li>
                      <li onClick={handleShow3}>
                        Incline dumbbell flyes – 3 sets of 10 rep
                      </li>
                      <li onClick={handleShow4}>Push-ups – 4 sets of 20 rep</li>
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
                      <li onClick={handleShow5}>
                        Seated dumbbell shoulder press – 4 sets of 12 reps
                      </li>
                      <li onClick={handleShow6}>
                        Standing barbell military press – 4 sets of 10 -12 reps
                      </li>
                      <li onClick={handleShow7}>
                        Dumbbell lateral raises – 4 sets of 12 repsDumbbell
                        lateral raises – 4 sets of 12 reps
                      </li>
                      <li onClick={handleShow8}>
                        Rear deltoid flyes – 3 sets of 15 rep
                      </li>
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
                      <li onClick={handleShow9}>
                        Barbell squats – 4 sets of 8 – 10 reps
                      </li>
                      <li onClick={handleShow10}>
                        Hack squats – 4 sets of 10 reps
                      </li>
                      <li onClick={handleShow11}>
                        Leg press machine – 3 sets of 10 reps
                      </li>
                      <li onClick={handleShow12}>
                        Hamstring curls – 3 sets of 10 reps
                      </li>
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
                      <li onClick={handleShow13}>
                        Chin-ups – 4 sets of 10 reps
                      </li>
                      <li onClick={handleShow14}>
                        Wide grip lat pull-downs – 4 sets of 12 reps
                      </li>
                      <li onClick={handleShow15}>
                        Close grip lat pull-downs – 4 sets of 12 reps
                      </li>
                      <li onClick={handleShow16}>
                        Barbell bent over rows – 4 sets of 8 reps
                      </li>
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
                      <li onClick={handleShow17}>
                        Double arm dumbbell curls = 4 sets 10 – 12 reps
                      </li>
                      <li onClick={handleShow18}>
                        Triceps rope pushdowns – 4 sets of 15 reps
                      </li>
                      <li onClick={handleShow19}>
                        Preacher curl machine – 4 sets of 12 reps
                      </li>
                      <li onClick={handleShow20}>
                        Skull crushers – 4 sets of 10 reps
                      </li>
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
