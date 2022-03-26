import { Button } from "bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { resetPassword } from "../../api";

function ResetPwd() {
  const {id, token} = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
     await resetPassword(id , token ,data)
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
                {...register("pemail", { required: true })}
              />
              <input
                className="my-2 p-1"
                type="password"
                name="Npassword"
                placeholder=" New Password"
                {...register("Npassword", { required: true })}
              />
              <button className=" mt-2" style={{backgroundColor: "#1b4a84",color:"white"}} type="submit">
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
