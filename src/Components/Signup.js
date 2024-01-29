import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, fs } from "./config/Config";
import { Button, Col, Container, Row } from "react-bootstrap";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import SolarNav from "./SolarNav";
import Footer from "./Footer";


const Signup = () => {

  const navigate = useNavigate();

  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
      console.log(credentials);
        setSuccessMsg('Signup Successful. You will now automatically be redirected to a Login Page');
        setFullname('');
        setEmail('');
        setPassword('');
        setErrorMsg('');
        setTimeout(() => {
          setSuccessMsg('');
          navigate('/login');
        }, 3000);
    }).catch((error) => {
      setErrorMsg(error.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <>
      <Container fluid className="signup_container">
        <Row className="d-flex flex-row justify-content-center">
          <Col md={6}>
        <div className="signup">
          <h1>Signup</h1>
          {successMsg && <>
            <div className="success-msg">{successMsg} </div>
            <br /> <br />
          </>}
          <form className="form-group" autoComplete="off" onSubmit={handleSignup}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Full Name" className="form-control my-3" required onChange={(e) => setFullname(e.target.value)} value={fullName} />
            <label htmlFor="email">Email</label>
            <input
              type="email" id="email" className="form-control my-3" required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              value={email}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password" id="password" className="form-control my-3" required value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <Button type="submit" className="signup_button" disabled={isLoading}>
              {isLoading ? 'Signing up...' : 'SIGN UP'}
            </Button>

            <br /> <br />
            <div className="signlog_button">
              <span>Already have an account?&nbsp;
              <Link to="/login" className="logsign_link">Login</Link></span>
            </div>
          </form>

          {errorMsg && <>
            <br /> <br />
            <div className="error-msg">{errorMsg} </div>
          </>}
        </div>
        </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;