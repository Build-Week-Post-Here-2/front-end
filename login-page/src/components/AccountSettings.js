import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import { useHistory } from "react-router-dom";
// import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from "../store";
import SignUp from "./SignUp";
import axiosWithAuth from "../utlis/axiosWithAuth";

const INIT_USER_DATA = {
  username: "",
  email: "",
};

const AccountSettings = () => {
  const [canUpdate, setCanUpdate] = useState(false);
  const [userData, setUserData] = useState(INIT_USER_DATA);

  useEffect(() => {
    axiosWithAuth()
      .put("/users/register")
      .then((res) => {
        setCanUpdate(!window.localStorage.getItem("/user"));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
