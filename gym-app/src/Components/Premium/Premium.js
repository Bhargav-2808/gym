import React from 'react'
import { Container,Button } from 'react-bootstrap';
import imagePath from './../../images/Login.jpeg'

const Premium = () => {
  return (
    <div className="my-5">
      <Container className='register d-flex'>
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form action="" method="post">
              <div className="d-flex flex-column">
                  <h1>Calculate Diet</h1>
                  <input className='my-2 p-1' type="text" name="" placeholder="Name" />
                  <input className='my-2 p-1' type="text" name="" placeholder="Age" />
                  <input className='my-2 p-1' type="email" name="" placeholder="Height(cm)" />
                  <input className='my-2 p-1' type="text" name="" placeholder="Weight(kg)" />
                  <h6 className='mt-1'>Category</h6>
                  <select className='mb-2 p-1' name="" id="">
                      <option value="gain">Weight Gain</option>
                      <option value="loss">Weight Loss</option>
                  </select>
                  <Button className='regButton mt-2' type="submit">Get Diet</Button>
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

export default Premium
