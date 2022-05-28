import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PremiumFeature = () => {
  return (
    <Container>
    <Row className="d-flex justify-content-center m-5">
      <Col className="d-flex justify-content-center">
        <Link  to="/premium/diet">
          <Button className="preButton me-2">Diet</Button>
        </Link>
        <Link to="/premium/exercise">
          <Button className="preButton me-2">Exercise</Button>
        </Link>
      </Col>
    </Row>
  </Container>
  )
}

export default PremiumFeature