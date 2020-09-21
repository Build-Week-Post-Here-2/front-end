import React from "react";

const SignUp = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>
            Username
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value=""
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email
            <input
              type="email"
              className="form-control"
              placeholder="email@gmail.com"
              //   value="email@gmail.com"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password
            <input type="password" className="form-control" value="" />
          </label>
        </div>
        <input type="submit" value="Sign Up" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default SignUp;
