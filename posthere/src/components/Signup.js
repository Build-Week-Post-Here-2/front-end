import React, { useState } from "react";
import axios from "axios";

const INITIAL_FORM_STATE = {
  username: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const handleInputChange = (e) => {
    const target = e.target;

    setFormState({ ...formState, [target.name]: target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reddit-sami.herokuapp.com/api/users/register", formState)
      .then((res) => {
        console.log(res);
        if (res.statusText === "Created") {
          console.log("New account is created successfully.");
        }
      });
  };
  return (
    <div>
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
