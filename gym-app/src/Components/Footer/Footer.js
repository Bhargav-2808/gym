import React from 'react'
import "./Footer.css"
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footerContainer py-3 text-center'>
      <Container>
        Copyright <span style={{color:'#102b4d'}}> © </span> 2022 All Right Reserved | Managed By <span style={{color:'#102b4d'}}>GYM_NAME.</span>
      </Container>
    </div>
  )
}

export default Footer;