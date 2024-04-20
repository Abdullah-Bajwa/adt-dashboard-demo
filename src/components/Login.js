import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, we'll just check if the username and password are both "admin"
    if (username === "admin" && password === "admin") {
      // Redirect to the home page ("/") on successful login
      navigate("/");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const [pwdVisible, setPwdVisible] = useState(false);
  const togglePwdVisible = () => {
    setPwdVisible(!pwdVisible);
    console.log("toggle");
  };

  return (
    <div className="centered">
      <video
        src={`${process.env.PUBLIC_URL}/login.mp4`}
        autoPlay
        muted
        loop
      ></video>
      <div className="flex-half">
        <div className="login-form">
          <div className="check">
            <img
              className="login-logo"
              src={`${process.env.PUBLIC_URL}/loginLogo.png`}
              alt="login"
            />
            <h2 className="login-title">Al-Durran Technologies</h2>
          </div>
          <h2 className="login-greeting">Welcome Back!</h2>
          <form id="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="Your Email or Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-container">
                <input
                  type={pwdVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="password"
                />
                <div onClick={togglePwdVisible} className="icon">
                  {pwdVisible ? <PiEye /> : <PiEyeClosed />}{" "}
                </div>
              </div>
            </div>
            <div className="form-group-inline">
              <div className="check">
                <input type="checkbox" id="keep-logged-in" />
                <label
                  style={{ marginTop: "1px" }}
                  htmlFor="keep-logged-in"
                  className="tiny-text"
                >
                  Keep me logged in
                </label>
              </div>
              <a
                style={{ marginBottom: "5px", marginTop: "1px" }}
                className="tiny-text"
                href="/forgot-password"
              >
                Forgot password
              </a>
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <div className="form-group-inline">
              <a
                style={{ marginBottom: "5px", marginTop: "5px" }}
                className="tiny-text"
                href="/sso"
              >
                Use Single Sign ON
              </a>
              <a
                style={{ marginBottom: "5px", marginTop: "5px" }}
                className="tiny-text"
                href="/partner-login"
              >
                Use Partner Login
              </a>
            </div>
          </form>
          <p>
            Don’t have an account?{" "}
            <Link className="signup-link" to="/signup">
              Sign up
            </Link>
          </p>
          <p className="disclaimer">
            I attest that I have read and agree to be bound to the{" "}
            <p className="terms">
              Al-Durran Technologies Online Services Terms and Conditions
            </p>{" "}
            and Service Description as Customer's authorized representative. I
            also acknowledge that my personal data will be processed for the
            purposes stated, and protected as described, in the{" "}
            <p className="terms">
              Al-Durran Technologies Global Privacy Statement
            </p>
            .
          </p>
          <p className="login-footnote">
            Al-Durran&trade;{" "}
            <p className="login-footnote-version">
              2.161.0-20987625536631871-patch
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
