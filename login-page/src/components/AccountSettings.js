import React, { useState } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from "../store";

const INITIAL_FORM_STATE = {
  username: "",
  email: "",
  password: "",
};

const AccountSettings = () => {
  const [canUpdate, setCanUpdate] = useState(false);
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const onBtnClick = () => {
    setCanUpdate(true);
  };

  const handleInputChange = (e) => {
    // const target = e.target;

    console.log("change");
  };

  const onFormSubmit = (e) => {
    console.log("Update");
  };

  return (
    <div>
      {canUpdate && (
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
                {/* <div>{formErrors.username}</div> */}
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
                {/* <div>{formErrors.email}</div> */}
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
                {/* <div>{formErrors.password}</div> */}
              </label>
            </div>
            <input
              type="submit"
              value="Save changes"
              className="btn btn-primary"
            />
          </form>
        </div>
      )}
      {!canUpdate && (
        <a className="btn btn-primary" onClick={onBtnClick}>
          Update Account
        </a>
      )}
    </div>
  );
};

export default AccountSettings;
