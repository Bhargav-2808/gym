import "./App.css";
import Register from "./Components/Register/Register";
import Body from "./Components/Body/Body";
import Login from "./Components/Login/Login";
import Class from "./Components/Classes/Class";
import Premium from "./Components/Premium/Premium";
import ForgotPwd from "./Components/ForgotPwd/ForgotPwd";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ResetPwd from "./Components/ForgotPwd/ResetPwd";
import { useEffect } from "react";
import Gym from "./Components/Classes/Gym";
import Yoga from "./Components/Classes/Yoga";
import Cardio from "./Components/Classes/Cardio";
import Zumba from "./Components/Classes/Zumba";
import Admin from "./Components/Admin/Admin";
import EditAdmin from "./Components/Admin/EditAdmin";

import Protected from './Components/Protected/Protected'
import PremiumExercise from "./Components/Body/PremiumExersice";
import Chart_ from "./Components/Body/Chart_";

function App() {
  // useEffect( ()=>{
  //   sessionStorage.setItem("login",true);
  // },[])
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/class" element={<Gym />} />
        <Route exact path="/forgotpassword" element={<ForgotPwd />} />
        <Route exact path="/premium/diet" element={<Premium />} />
        <Route exact path="/premium/exercise" element={<PremiumExercise />} />
        <Route exact path="/resetpassword/:id/:token" element={<ResetPwd />} />
        <Route exact path="/class/gym" element={<Gym />} />
        <Route exact path="/class/yoga" element={<Yoga />} />
        <Route exact path="/class/cardio" element={<Cardio />} />
        <Route exact path="/class/zumba" element={<Zumba />} />
        <Route exact path="/editadmin/:id" element={<EditAdmin />} />
      
        <Route
          path="/admin"
          element={
            <Protected Component={Admin}/>
              
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
