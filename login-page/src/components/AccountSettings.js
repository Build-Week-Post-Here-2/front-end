import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import { useHistory } from "react-router-dom";
// import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from "../store";
import SignUp from "./SignUp";
import axiosWithAuth from "../utlis/axiosWithAuth";
//STYLE IMPORTS
import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
        <AccountButton>
        <a onClick={onBtnClick}>
          Update Account
        </a>
        </AccountButton>
      )}
    </div>
  );
};

const AccountButton = styled(Button)({
  background: 'linear-gradient(45deg, blue 1%, rgb(252,140,3) 90%)',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: '1.5em',
  marginTop: '2%',
});

export default AccountSettings;
