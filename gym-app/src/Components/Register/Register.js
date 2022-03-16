import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Container>
        <Row>
          <Col lg={4}>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Enter Your Full Name"
                name= "fullname"
                {...register('fullname', { required: true })}
              />
            </div>
            <div className="form-group">
              
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your E-mail Address"
                name= "email"
                {...register('email', { required: true })}
              />
            </div>
            <div className="form-group">
              
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Your Phone Number"
                name= "phone"
                {...register('phone', { required: true })}
              />
            </div>
            <div className="form-group">
              
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                name= "password"
                {...register('password', { required: true })}
              />
            </div>
            <div className="form-group">
              
              <select className="form-control" id="state" 
              name= "city"
              {...register('city', { required: true })}>
                <option value="">--- Select Your State ---</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Assam">Assam</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Punjab">Punjab</option>
              </select>
            </div>
            <div className="form-group">
              
                
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                 
                {...register('gender', { required: true })}
                />
               
                
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  
                {...register('gender', { required: true })}
                />
               
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                  
                  {...register('gender', { required: true })}
                />
               
              </div>
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="tnc" 
                name= "checkedbox"
                {...register('checkedbox', { required: true })}/>
               
              </div>
            </div>
            <button className="btn btn-primary">Create New Account</button>
          </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
