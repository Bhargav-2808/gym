import React, { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imagePath from "./../../images/Login.jpeg";
import { useForm } from "react-hook-form";
import { ForgotPassword } from "../../api";

const ForgotPwd = () => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  //console.log(msg);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // let navigate = useNavigate();
    const response = await ForgotPassword(data);
    console.log(response);
    if (response) {
      handleShow();
      setMsg(response?.data);
    }
    //console.log(data);
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

      <div className="my-5">
        <Container className="register d-flex">
          <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-column">
                <h1>Find Your Account</h1>
                <hr />
                <p>
                  Please enter your email address to search for your account.
                </p>
                <input
                  className="my-2 p-1"
                  type="email"
                  name="femail"
                  placeholder="Email"
                  {...register("femail", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.femail?.type === "required" && "Email is required"}{" "}
                </span>
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.femail && "Enter email in valid formate"}
                </span>
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
    </>
  );
};

export default ForgotPwd;
