import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import back2 from './../../images/back2.jpg'
import './bodyTop.css'

function BodyTop() {
  return (
    <>

            <div className='back2'> 
              
                <Container>
                    <Row>
                      <Col className='d-flex justify-content-center bodyTop_'>
                        <div>

                        <h1 className='bodyTopHeader'>
                          IT'S ALL ABOUT WHAT YOU GAIN/LOSS  
                        </h1>    
                        <p className='bodyTopPara'>
                          Empower you self with us
                        </p>
                        <Button className='mt-3 preButton'>GET STARTED</Button>
                        </div>
                      </Col>
                      
                    </Row>
                  </Container>
                  
                
            </div>
        
    </>
  )
}

export default BodyTop