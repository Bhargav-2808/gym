import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import imagePath from "./../../images/Login.jpeg";
import { useForm } from "react-hook-form";
import Chart_ from "../Body/Chart_";


const Premium = () => {

  // const data =20;
  const [cData, setcData] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{


    setcData(data);
    //console.log(data);
  }
   

  return (
    <div className="my-5">
      <Container className="register d-flex">
        <div className="box d-flex flex-column flex-md-row p-5 justify-content-center shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <h1>Calculate Diet</h1>
              <input
                className="my-2 p-1"
                type="text"
                name="name"
                placeholder="Name"
                
                {...register("name" ,  { required: true })}
              />
              <input
                className="my-2 p-1"
                type="text"
                name="age"
                placeholder="Age"
                
                {...register("age" ,  { required: true })}
              />
              <input
                className="my-2 p-1"
                type="text"
                name="height"
                placeholder="Height(cm)"
                
                {...register("height" ,  { required: true })}
              />
              <input
                className="my-2 p-1"
                type="text"
                name="weight"
                placeholder="Weight(kg)"
                {...register("weight" ,  { required: true })}
              />
              <h6 className="mt-1">Category</h6>
              <select className="mb-2 p-1" name="task" id=""
              
              {...register("task" ,  { required: true })}
              >
                <option value="Weight gain">Weight Gain</option>
                <option value=" Weight loss">Weight Loss</option>
              </select>
              <Button className="regButton mt-2" type="submit">
                Get Diet
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

      <Chart_ data_={cData} />
    </div>
  );
};

export default Premium;
