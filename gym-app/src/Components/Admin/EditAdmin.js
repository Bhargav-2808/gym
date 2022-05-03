import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editUser, getusers } from "../../api";

const EditAdmin = () => {
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getusers(id);
    console.log(response.data);
    reset(response.data);
  };
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    let response = await editUser(id,data);
    if (response) {
      navigate("/admin");
    }
  };
  return (
    <>
      <div className="my-5">
        <Container className="register d-flex">
          <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-column">
                <h1>Update Details</h1>

                <input
                  className="my-2 p-1"
                  type="text"
                  name="name"
                  placeholder="Enter the Name"
                  {...register("name", {
                    required: true,
                    min: 3,
                    max: 20,
                  })}
                />
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.firstName?.type === "required" && "Name is required"}
                </span>
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.firstname && "First Name should have atleast 3 char"}
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
                  {errors.mobile?.type === "required" &&
                    "Mobile No is required"}
                </span>
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
                  {errors.email?.type === "required" && "Email is required"}
                </span>
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.Npassword && "Enter email in valid formate"}
                </span>

                <Button className="regButton mt-2" type="submit">
                  Update
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EditAdmin;
