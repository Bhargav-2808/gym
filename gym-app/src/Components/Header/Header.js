import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className='headerNav py-2' style={{margin:"0",padding:"0"}}>
        <Container fluid 
        >
          <Navbar.Brand href="#home">GYM_NAME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="justify-content-md-end text-center me-auto w-100">
            <a href='/register'><Button className='regButton'>Register</Button></a>
            <a href='/login'><Button className='supButton mx-2'>Login</Button></a>
              <a href='/premium'><Button className='preButton'><i className="fas fa-crown me-2"></i>Premium</Button></a>
              {/* <Link to="/register"><Button className='regButton'>Register</Button></Link>
              <Link to="/login"><Button className='supButton mx-2'>Login</Button></Link>
              <Link to="/premium"><Button className='preButton'><i className="fas fa-crown me-2"></i>Premium</Button></Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header;
