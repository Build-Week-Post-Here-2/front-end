import React, { useEffect, useState } from "react";
import * as yup from "yup";

import axiosWithAuth from "../utlis/axiosWithAuth";
import signupSchema from "../Validation/signupFormSchema";

const INITIAL_FORM_STATE = {
  username: "",
  email: "",
  password: "",
};

const INITIAL_ERROR_STATE = {
  username: "",
  password: "",
  email: "",
};

const SignUp = (props) => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [responseMsg, setResponseMsg] = useState({ success: null, msg: "" });
  const [formErrors, setFormErrors] = useState(INITIAL_ERROR_STATE);
  const [disabled, setDisabled] = useState(true);
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    if (props && props.userData) {
      setFormState(props.userData);
    }
  }, [props]);

  const handleInputChange = (e) => {
    const target = e.target;

    validate(target.name, target.value);

    setFormState({ ...formState, [target.name]: target.value });
  };

  const validate = (name, value) => {
    yup
      .reach(signupSchema, name)
      .validate(value)
      .then((valid) => {
        setFormChanged(true);
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  useEffect(() => {
    signupSchema.isValid(formState).then((valid) => {
      if (!props) {
        setDisabled(!valid);
      } else if (props.btn && formChanged) {
        // This is true when user is on Account settings and changes the input value
        setDisabled(!valid);
      }
    });
  }, [formState, formChanged, props]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/register", formState)
      .then((res) => {
        console.log(res);
        if (res.statusText === "Created") {
          console.log("New account is created successfully.");
          const successMsg = props.btn
            ? "Account is updated successfully."
            : "New account is created successfully.";
          setFormState(INITIAL_FORM_STATE);
          setResponseMsg({
            success: true,
            msg: successMsg,
          });
        }
        window.location = '/login'
      })
      .catch((err) => {
        // debugger;
        if (err.response) {
          console.log(err.response);
          setResponseMsg({
            success: false,
            msg: err.response.data.message,
          });
        }
      });
  };
  return (
    <div>
      {responseMsg.success !== null && (
        <p
          className={`text-center ${
            responseMsg.success ? "text-success" : "text-danger"
          }`}
        >
          {responseMsg.msg}
        </p>
      )}
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label>
            Username
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Username"
              value={formState.username}
              onChange={handleInputChange}
            />
            <div className="text-danger">{formErrors.username}</div>
          </label>
        </div>
        <div className="form-group">
          <label>
            Email
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Your email"
              value={formState.email}
              onChange={handleInputChange}
            />
            <div className="text-danger">{formErrors.email}</div>
          </label>
        </div>
        <div className="form-group">
          <label>
            Password
            <input
              name="password"
              type="password"
              className="form-control"
              value={formState.password}
              onChange={handleInputChange}
            />
            <div className="text-danger">{formErrors.password}</div>
          </label>
        </div>
        {props.btn ? (
          <input
            type="submit"
            value={props.btn}
            className={`btn btn-primary ${disabled ? "disabled" : "active"}`}
          />
        ) : (
          <input
            type="submit"
            value={"Sign Up"}
            className={`btn btn-primary ${disabled ? "disabled" : "active"}`}
          />
        )}
      </form>
    </div>
  );
};

export default SignUp;
