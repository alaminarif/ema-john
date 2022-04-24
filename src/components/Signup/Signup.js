import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  console.log(user);
  if (user) {
    navigate("/shop");
  }
  // const handleError = (event) => {
  //   setError();
  // };
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("two passwords did not macth");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 characters longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-grp">
              <label htmlFor="email">Email</label>
              <input type="email" onBlur={handleEmailBlur} name="email" id="email" required />
            </div>
            <div className="input-grp">
              <label htmlFor="password">Password</label>
              <input type="password" onBlur={handlePasswordBlur} name="password" id="password" required />
            </div>
            <div className="input-grp">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" onBlur={handleConfirmPasswordBlur} name="Confirm-password" id="password" required />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="Submit" />
          </form>
          <p>
            {" "}
            Already Account?{" "}
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
