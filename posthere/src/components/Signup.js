import React, { useState } from "react";

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
  return (
    <div>
      <form>
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
