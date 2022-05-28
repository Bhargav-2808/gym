import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import back2 from './../../images/back2.jpg'
import './bodyTop.css'

function BodyTop() {
  // console.log(props);00
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
                          Empower your self with us
                        </p>
                        <Link  to="/premium/diet"><Button className={`preButton mx-2 ${sessionStorage.getItem("login")==="true"?'':'d-none' } ${sessionStorage.getItem("login")==="false"?'d-none':'' }`}>GET STARTED</Button></Link>
                        </div>
                      </Col>
                      
                    </Row>
                  </Container>
                  
                
            </div>
        
    </>
  )
}

export default BodyTop