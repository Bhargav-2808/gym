import React from "react";

import "./Register.css";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {registerUser} from './../../api';

function Register() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = async data =>{
    await registerUser(data);
    //console.log(data);
  }

  return (
    <div className="my-5">
      <Container className="register d-flex">s
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <h1>Sign Up</h1>
              <input
                className="my-2 p-1"
                type="text"
                name="firstName"
                placeholder="First Name"
                {...register("firstName" ,  { required: true })}
              />
              <input
                className="my-2 p-1"
                type="text"
                name="lastName"
                placeholder="Last Name"
                {...register("lastName" ,  { required: true })}
              />
              <input
                className="my-2 p-1"
                type="text"
                name="mobile"
                placeholder="Mobile No."
                {...register("mobile" ,  { required: true })}
              />
              <input
                className="my-2 p-1"
                type="email"
                name="email"
                placeholder="Email"
                {...register("email" ,  { required: true })}
              />
              <input
                className="my-2 p-1"
                type="password"
                name="password"
                placeholder="Password"
                {...register("password" ,  { required: true })}
              />
              <input
                className="my-2 p-1"
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                {...register("cpassword" ,  { required: true })}
              />
              <Button className="regButton mt-2" type="submit">
                Register
              </Button>
              <p className="text-center my-3">Already Have An Accout?</p>
              <Link to="/login">
                <Button className="supButton w-100" type="submit">Login</Button>
              </Link>
            </div>
          </form>
         
        </div>
      </Container>
    </div>
  );
}

export default Register;
