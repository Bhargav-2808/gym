import { Button } from "bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { resetPassword } from "../../api";

function ResetPwd() {
  const { id, token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await resetPassword(id, token, data);
    //  console.log(data);
  };
  return (
    <>
      <Container className="register d-flex mt-5 mb-5 ">
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <h1>Reset Password</h1>
              <input
                className="my-2 p-1"
                type="email"
                name="pemail"
                placeholder="Reenter your email"
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
              <input
                className="my-2 p-1"
                type="password"
                name="Npassword"
                placeholder=" New Password"
                {...register("Npassword", {
                  required: true,
                  pattern:
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/,
                })}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.Npassword?.type === "required" &&
                  "Password is required"}
              </span>{" "}
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.Npassword &&
                  "Enter password in valid formate(min 8 char,atleast 1 uppercase,lowercase and digit, add special symbol)"}
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
