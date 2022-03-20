import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imagePath from './../../images/Login.jpeg'
function Login() {
  return (
    <div className="my-5">
      <Container className='register d-flex'>
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form action="" method="post">
              <div className="d-flex flex-column">
                  <h1>Login</h1>
                  <input className='my-2 p-1' type="email" name="email" placeholder="Email" />
                  <input className='my-2 p-1' type="password" name="password" placeholder="Password" />
                  <Button className='supButton mt-2'>Login</Button>
                  <hr />
                  <Link to="/resetpassword" exact style={{textDecoration:'none'}}><p className='text-center my-2'>Forgot Password</p></Link>
                  <hr />
                  <p className='text-center my-3'>Don't Have An Accout?</p>
                  <Link to="/register" exact><Button className='supButton mt-2 w-100'>Sign Up</Button></Link>
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

export default Login;