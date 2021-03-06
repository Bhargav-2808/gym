import React, { useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import crown from "./../../images/Crown.png";

const Header = () => {
  var log;
  const nav = useNavigate();
  if (sessionStorage.length == 0) {
    log = (
      <Link to="/login">
        <Button className="headerbutton mx-2">login</Button>
      </Link>
    );
  }
  // let logbutton;
  //let prebutton;

  // if (sessionStorage.getItem("login") === false) {
  //   logbutton = (
  //     <Link to="/login">
  //       <Button className="supButton mx-2">Login</Button>
  //     </Link>
  //   );
  // }

  // if (sessionStorage.getItem("login") === true) {
  //   logbutton = (
  //     <Button className="supButton mx-2" onClick={logout}>Log Out</Button>
  //   );
  // }

  //console.log(typeof(sessionStorage.getItem("login")));
  //console.log(sessionStorage.getItem("login"));

  // if (sessionStorage.getItem("login") === true) {
  //   prebutton = (
  //     <Link to="/premium">
  //       <Button className="preButton">
  //         <img src={crown} width={20} alt="crown" className="me-1" />
  //         Premium
  //       </Button>
  //     </Link>
  //   );
  // }
  const logout = () => {
    //sessionStorage.clear();
    sessionStorage.setItem("login", false);
    sessionStorage.setItem("admin", false);
    sessionStorage.setItem("logdetails", false);
    
    window.location.reload(false);
    //console.log( sessionStorage.setItem("login",false));
    nav("/");
  };

  // useEffect( () =>{

  //   logout();
  // },[])

  return (
    <Navbar
      expand="lg"
      className="headerNav py-2"
      style={{ margin: "0", padding: "0", height: "10vh" }}
    >
      <Container fluid>
        {/* <Navbar.Brand href="#home" style={{ color: "white" }}>
          GYM_NAME
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-between align-items-center">
          <Nav className=" text-center mx-auto ">
            {/* <a href='/register'><Button className='regButton'>Register</Button></a>
            <a href='/login'><Button className='supButton mx-2'>Login</Button></a>
              <a href='/premium'><Button className='preButton'><i className="fas fa-crown me-2"></i>Premium</Button></a> */}
            <Link to="/">
              <Button className="headerbutton me-3">Home</Button>
            </Link>
            <Link to="/class">
              <Button className="headerbutton me-2">Class</Button>
            </Link>
            
            {
              //   (sessionStorage.getItem("login")===true)?( <Button className="supButton mx-2" onClick={logout}>Log Out</Button>):<Link to="/login">
              //   <Button className="supButton mx-2">Login</Button>
              // </Link>
            }

            {/* {logbutton} */}
            {/* {prebutton}  */}
 
            {log}
            {sessionStorage.getItem("login") == "null" ||
            sessionStorage.getItem("login") == "false" ? (
              <Link to="/login">
                <Button
                  className={`headerbutton  mx-2 ${
                    sessionStorage.getItem("login") === "true" ? "d-none" : ""
                  }  ${
                    sessionStorage.getItem("login") === "false" ? "" : "d-none"
                  }`}
                >
                  Login
                </Button>
              </Link>
            ) : (
              <></>
            )}

            <Link to="/premium/diet">
              <Button
                className={`headerbutton mx-2 ${
                  sessionStorage.getItem("login") === "true" ? "" : "d-none"
                } ${
                  sessionStorage.getItem("login") === "false" ? "d-none" : ""
                }`}
              >
                <img src={crown} width={20} alt="crown" className="me-1" />
                Premium
              </Button>
            </Link>

            <Button
              className={` headerbutton mx-2 ${
                sessionStorage.getItem("login") === "true" ? "" : "d-none"
              } ${
                sessionStorage.getItem("login") === "false" ? "d-none" : ""
              } `}
              onClick={logout}
            >
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
