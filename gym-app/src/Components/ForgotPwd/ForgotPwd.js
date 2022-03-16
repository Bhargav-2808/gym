import React from 'react'
import { Container,Button } from 'react-bootstrap'
import imagePath from './../../images/Login.jpeg'

const  ForgotPwd= () => {
  return (
    <div className="my-5">
      <Container className='register d-flex'>
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form action="" method="post">
              <div className="d-flex flex-column">
                  <h1>Find Your Account</h1>
                  <hr />
                  <p>Please enter your email address to search for your account.</p>
                  <input className='my-2 p-1' type="email" name="" placeholder="Email" />
                  <Button className='regButton mt-2' type="submit">Verify Email</Button>
              </div>
          </form>
          <div>
              <img className="img-fluid h-100 ps-5" src={imagePath} alt="LoginImg" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ForgotPwd;