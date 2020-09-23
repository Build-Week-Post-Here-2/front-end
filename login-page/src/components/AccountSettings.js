import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import { useHistory } from "react-router-dom";
// import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from "../store";
import SignUp from "./SignUp";
import axiosWithAuth from "../utlis/axiosWithAuth";

const DUMMY_USER_DATA = {
  username: "user",
  email: "user@domain.com",
  password: "123456",
};

const AccountSettings = () => {
  const [canUpdate, setCanUpdate] = useState(false);

  useEffect(() =>{
      axiosWithAuth()
      .put('/users/register')
      .then(res => {
        setCanUpdate(!window.localStorage.getItem('/user'))
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  })

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
