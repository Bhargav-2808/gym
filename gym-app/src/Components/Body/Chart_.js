import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "react-google-charts";



const Chart_ = ({data_}) => {
 


  const {name,age,height,weight,task } = data_;
  
  //const We= JSON.parse(weight);
  //const he= JSON.parse(height);
  //let bmi = (We / ((he * he)/ 10000)).toFixed(2);

  const data = [
    ["Index", "Number", { role: "style" }],
    ["Weight(Kg)", 20, "blue"], // RGB value
    ["Height(cm)", 21, "violet"], // English color name
    ["BMI", 30, "green"],
    // CSS-style declaration
  ];

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Personal<span style={{color:"#1b4a84"}}>  Index</span></h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Chart
              chartType="ColumnChart"
              data={data}
              width={"100%"}
              height={"400px"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Chart_;
