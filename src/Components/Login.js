import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/Config";
import SolarNav from "./SolarNav";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccessMsg(
          "Login Successful. You will now automatically be redirected to Product Page"
        );
        setEmail("");
        setPassword("");
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          navigate("/product");
        }, 3000);
      })
      .catch((error) => {
        setErrorMsg("User not registered. Please Signup");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Container fluid className="login_container">
        <Row className="d-flex flex-row justify-content-center">
          <Col md={3}>
            <div className="login">
              <h1>Login</h1>
              {successMsg && (
                <>
                  <div className="success-msg">{successMsg} </div>
                  <br /> <br />
                </>
              )}
              <form
                className="form-group"
                autoComplete="off"
                onSubmit={handleLogin}
              >
                <input
                  type="email"
                  className="form-control my-4"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  value={email}
                  id=""
                />
                <input
                  type="password"
                  className="form-control my-4"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  name=""
                  id=""
                />
                <Button
                  type="submit"
                  className="login_button"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "LOGIN"}
                </Button>
                <br /> <br />
                <div className="signlog_button">
                  <span>
                    Don't have an account?&nbsp;
                    <Link to="/signup" className="logsign_link">
                      Signup
                    </Link>
                  </span>
                </div>
              </form>

              {errorMsg && (
                <>
                  <br /> <br />
                  <p className="error-msg">{errorMsg} </p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
