import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from "../store";
import SignUp from "./SignUp";

const INIT_USER_DATA = {
  username: "",
  email: "",
};

const AccountSettings = () => {
  const [canUpdate, setCanUpdate] = useState(false);
  const [userData, setUserData] = useState(INIT_USER_DATA);

  const onBtnClick = () => {
    setCanUpdate(true);
  };

  useEffect(() => {
    const USERNAME = window.localStorage.getItem("username");
    const EMAIL = window.localStorage.getItem("email");
    if (canUpdate) {
      setUserData({ ...userData, username: USERNAME, email: EMAIL });
    }
  }, [canUpdate]);

  return (
    <div className="p-3">
      {canUpdate && <SignUp btn="Save changes" userData={userData} />}
      {!canUpdate && (
        <a className="btn btn-primary" onClick={onBtnClick}>
          Update Account
        </a>
      )}
    </div>
  );
};

export default AccountSettings;
