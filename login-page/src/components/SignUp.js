import React, { useState } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";

const INITIAL_FORM_STATE = {
  username: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [responseMsg, setResponseMsg] = useState({ success: null, msg: "" });

  const handleInputChange = (e) => {
    const target = e.target;

    setFormState({ ...formState, [target.name]: target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/register", formState)
      .then((res) => {
        console.log(res);
        if (res.statusText === "Created") {
          console.log("New account is created successfully.");
          setFormState(INITIAL_FORM_STATE);
          setResponseMsg({
            success: true,
            msg: "New account is created successfully.",
          });
        }
      })
      .catch((err) => {
        // debugger;
        console.log(err);
        setResponseMsg({
          success: false,
          msg: "Something went wrong. Please try again.",
        });
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
          This is a message
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
          </label>
        </div>
        <div className="form-group">
          <label>
            Email
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="email@gmail.com"
              value={formState.email}
              onChange={handleInputChange}
            />
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
          </label>
        </div>
        <input type="submit" value="Sign Up" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default SignUp;
