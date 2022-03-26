
import './App.css';
import Register from './Components/Register/Register';
import Body from './Components/Body/Body';
import Login from './Components/Login/Login';
import Premium from './Components/Premium/Premium';
import ForgotPwd from './Components/ForgotPwd/ForgotPwd';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ResetPwd from './Components/ForgotPwd/ResetPwd';

function App() {
  return (
    <>
      <Header/>
       <Routes>
          <Route exact path='/' element={<Body/>}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/forgotpassword" element={<ForgotPwd/>}/>
          <Route exact path="/premium" element={<Premium />}/>
          <Route exact path="/resetpassword/:id/:token" element={<ResetPwd />}/>
        </Routes>
      <Footer/>
      

    </>
  );
}

export default App;
