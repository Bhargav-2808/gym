import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginCheck } from "../../api";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./Login.css";
import Body from "../Body/Body";

function Login() {
  let navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (sessionStorage.getItem("login") === "true") {
      navigate("/");
    }
  });useEffect(() => {
    if (sessionStorage.getItem("admin") === "true") {
      navigate("/admin");
    }
  });

  const onSubmit = async (data) => {
    let response = await LoginCheck(data);
    if (response) {
      sessionStorage.setItem("login", true);
      sessionStorage.setItem("logdetails",JSON.stringify(response));
      navigate("/");
    }


    if (
      response?.data?.user?.password === "admin@123" &&
      response?.data?.user?.email === "admin@gmail.com"
    ) {
      sessionStorage.setItem("admin", true);
      navigate("/admin");
    }

    // if (
    //   response?.data?.user?.password === "admin@123" &&
    //   response?.data?.user?.email === "admin@gmail.com"
    // ) {
    //   localStorage.setItem("admin", true);
    // }
    // // console.log(response);
   

    window.location.reload(false);
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
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.email?.type === "required" && "Email is required"}
              </span>{" "}
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.email && "Enter email in valid formate"}
              </span>
              <div className="_pwd">
                <input
                  className="my-2 p-1 input-pwd"
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    min: 8,
                  })}
                />
                <button className="eye">
                  <RemoveRedEyeIcon onMouseOver={togglePassword} />
                </button>
              </div>
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.password?.type === "required" && "Password is required"}
              </span>{" "}
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.Npassword &&
                  "Enter password in valid formate(min 8 char)"}
              </span>
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
