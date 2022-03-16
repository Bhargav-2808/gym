import React from 'react'
import imagePath from './../../images/Login.jpeg'
import './Register.css'
import { Link } from 'react-router-dom'
import { Container,Button } from 'react-bootstrap';

function Register() {
  return (
    <div className="my-5">
      <Container className='register d-flex'>
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form action="" method="post">
              <div className="d-flex flex-column">
                  <h1>Sign Up</h1>
                  <input className='my-2 p-1' type="text" name="" placeholder="First Name" />
                  <input className='my-2 p-1' type="text" name="" placeholder="Last Name" />
                  <input className='my-2 p-1' type="text" name="" placeholder="Mobile No." />
                  <input className='my-2 p-1' type="email" name="" placeholder="Email" />
                  <input className='my-2 p-1' type="password" name="" placeholder="Password" />
                  <input className='my-2 p-1' type="password" name="" placeholder="Confirm Password" />
                  <Button className='regButton mt-2' type="submit">Register</Button>
                  <p className='text-center my-3'>Already Have An Accout?</p>
                  {/* <Link to="/login"><Button className='supButton w-100'>Login</Button></Link> */}
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

export default Register;