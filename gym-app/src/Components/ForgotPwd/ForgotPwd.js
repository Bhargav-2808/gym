import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imagePath from "./../../images/Login.jpeg";
import { useForm } from "react-hook-form";
 import { ForgotPassword } from "../../api";

const ForgotPwd = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // let navigate = useNavigate();
    await ForgotPassword(data);
    // if (response){
    //   navigate("/");
    // }
    console.log(data);
  };  
  return (
    
    <div className="my-5">
      <Container className="register d-flex">
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <h1>Find Your Account</h1>
              <hr />
              <p>Please enter your email address to search for your account.</p>
              <input
                className="my-2 p-1"
                type="email"
                name="femail"
                placeholder="Email"
                {...register("femail" ,  { required: true })}
              />
              <Button className="regButton mt-2" type="submit">
                Verify Email
              </Button>
            </div>
          </form>
          <div>
            <img
              className="img-fluid h-100 ps-5"
              src={imagePath}
              alt="LoginImg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPwd;
