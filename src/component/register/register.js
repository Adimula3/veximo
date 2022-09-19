import React from "react";
import {NavLink} from "react-bootstrap";
import {FcGoogle} from "react-icons/fc";
import '../../styles/signUp.css'

export const Register = () => {
  return (
      <div className="signUp">
          <div className="d-flex">
              <NavLink to=""  className="nav-link">Sign In</NavLink>
              <NavLink to=""  className="nav-link">Create Account</NavLink>
          </div>
          <form>
              <input type="email" className="form-control"
                     placeholder="Email" />
              <input type="password" className="form-control"
                     placeholder="Password"/>
              <NavLink to=""  className="nav-link forgot-password">Forgot Password?</NavLink>
              <button className="btn btn-purple">Sign in</button>
          </form>
          <h6 className="or">or</h6>
          <button className="btn btn-dark"><FcGoogle className="google-icon" />Sign in using Google</button>
      </div>
  );
}
export const SignUp = () => {
  return (
      <div className="signUp">
          <div className="d-flex">
              <NavLink to=""  className="nav-link">Create Account</NavLink>
              <NavLink to=""  className="nav-link">Sign In</NavLink>
          </div>
          <form>
              <input type="email" className="form-control"
                     placeholder="Email" />
              <input type="password" className="form-control"
                     placeholder="Choose password"/>
              <button className="btn btn-purple">Continue</button>
          </form>
          <button className="btn btn-dark register"><FcGoogle className="google-icon" />Sign in using Google</button><br/>
          <h6 className="agree">By clicking Continue you agree to the terms of Kuna
              Exchange User Agreement and confirm that you are over 18 years old</h6>
      </div>
  );
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {Register,SignUp};
