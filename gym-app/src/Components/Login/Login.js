import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginCheck } from "../../api";



function Login() {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    
  let response =await LoginCheck(data);
  if (response){
    navigate("/");
  }

  };

  return (
    <div className="my-5">
      <Container className="register d-flex">
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <h1>Login</h1>
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
              <Button className="supButton mt-2" type="submit">
                Login
              </Button>
              <hr />
              <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                <p className="text-center my-2">Forgot Password</p>
              </Link>
              <hr />
              <p className="text-center my-3">Don't Have An Accout?</p>
              <Link to="/register">
                <Button className="supButton mt-2 w-100">Sign Up</Button>
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
