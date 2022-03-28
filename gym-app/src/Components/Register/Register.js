import React from "react";

import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { RegisterUser } from "./../../api";

function Register() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let response = await RegisterUser(data);
    if (response) {
      navigate("/");
    }
  };

  return (
    <div className="my-5">
      <Container className="register d-flex">
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <h1>Sign Up</h1>
              <input
                className="my-2 p-1"
                type="text"
                name="firstName"
                placeholder="First Name"
                {...register("firstName", { required: true, min: 3, max: 20 })}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.firstName?.type === "required" &&
                  "First name is required"}</span>
                   <span style={{ color: "red", fontSize: "12px" }}>
                {errors.firstname && "First Name should have atleast 3 char"}
              </span>
              <input
                className="my-2 p-1"
                type="text"
                name="lastName"
                placeholder="Last Name"
                {...register("lastName", { required: true, min: 3, max: 20 })}
              />

              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.lastName?.type === "required" &&
                  "Last name is required"}</span>
                   <span style={{ color: "red", fontSize: "12px" }}>
                {errors.lastname && "Last Name should have atleast 3 char"}
              </span>
              <input
                className="my-2 p-1"
                type="text"
                name="mobile"
                placeholder="Mobile No."
                {...register("mobile", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.mobile?.type === "required" && "Mobile No is required"}</span>
                <span style={{ color: "red", fontSize: "12px" }}>
                {errors.Npassword && "Add 10 digit only"}
              </span>
              <input
                className="my-2 p-1"
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.email?.type === "required" && "Email is required"}</span>
                <span style={{ color: "red", fontSize: "12px" }}>
                {errors.Npassword && "Enter email in valid formate"}
              </span>
              <input
                className="my-2 p-1"
                type="password"
                name="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/,
                })}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.password?.type === "required" && "Password is required"}</span>
                <span style={{ color: "red", fontSize: "12px" }}>
                {errors.Npassword &&
                  "Enter password in valid formate(min 8 char,atleast 1 uppercase,lowercase and digit, add special symbol)"}
              </span>
              <input
                className="my-2 p-1"
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                {...register("cpassword", {
                  required: true,
                  pattern:
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/,
                })}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.cpassword?.type === "required"
                 &&
                  "Confirm Password is required"}</span>
                   <span style={{ color: "red", fontSize: "12px"}} >
                {errors.Npassword &&
                  "Enter password in valid formate(min 8 char,atleast 1 uppercase,lowercase and digit, add special symbol)"}
              </span>
              <Button className="regButton mt-2" type="submit">
                Register
              </Button>
              <p className="text-center my-3">Already Have An Accout?</p>
              <Link to="/login">
                <Button className="supButton w-100" type="submit">
                  Login
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Register;
