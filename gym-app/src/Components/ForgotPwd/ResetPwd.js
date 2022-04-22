import { Button } from "react-bootstrap";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../api";

function ResetPwd() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  let navigate = useNavigate();

  //console.log(msg);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  const { id, token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response= await resetPassword(id, token, data);
    //  console.log(data);
    if(response){
      handleShow();
      setMsg(response?.data);
      navigate("/login");
    }
  };
  return (
    <>
     <Modal show={show} onHide={handleClose}>
       
       <Modal.Body>{msg}</Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Close
         </Button>
        
       </Modal.Footer>
     </Modal>
      <Container className="register d-flex mt-5 mb-5 ">
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <h1>Reset Password</h1>
              <input
                className="my-2 p-1"
                type="email"
                name="pemail"
                placeholder="Renter your email"
                {...register("pemail", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.pemail && "Enter email in valid formate"}
              </span>{" "}
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.pemail?.type === "required" && "Email is required"}
              </span>
              <div className="_pwd">
                <input
                  className="my-2 p-1 input-pwd"
                  type={passwordShown ? "text" : "password"}
                  name="Npassword"
                  placeholder="Password"
                  {...register("Npassword", {
                    required: true,
                    min: 8,
                  })}
                />
                <button className="eye">
                  <RemoveRedEyeIcon onMouseOver={togglePassword}/>
                </button>
              </div>

              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.Npassword?.type === "required" &&
                  "Password is required"}
              </span>{" "}
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.Npassword &&
                  "Enter password in valid formate(min 8 char)"}
              </span>
              <button
                className=" mt-2"
                style={{ backgroundColor: "#1b4a84", color: "white" }}
                type="submit"
              >
                Reset
              </button>
              <hr />
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default ResetPwd;
