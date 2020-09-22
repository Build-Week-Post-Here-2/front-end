import React, { useState } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from "../store";
import SignUp from "./SignUp";

const DUMMY_USER_DATA = {
  username: "user",
  email: "user@domain.com",
  password: "123456",
};

const AccountSettings = () => {
  const [canUpdate, setCanUpdate] = useState(false);

  const onBtnClick = () => {
    setCanUpdate(true);
    console.log("...");
  };

  return (
    <div className="p-3">
      {canUpdate && <SignUp btn="Save changes" userData={DUMMY_USER_DATA} />}
      {!canUpdate && (
        <a className="btn btn-primary" onClick={onBtnClick}>
          Update Account
        </a>
      )}
    </div>
  );
};

export default AccountSettings;
