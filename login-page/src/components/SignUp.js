import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { styled, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import RedditIcon from '@material-ui/icons/Reddit'

import axiosWithAuth from "../utlis/axiosWithAuth";
import signupSchema from "../Validation/signupFormSchema";

const INITIAL_FORM_STATE = {
  username: "",
  email: "",
  password: "",
};

const INITIAL_ERROR_STATE = {
  username: "",
  password: "",
  email: "",
};

const SignUp = (props) => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [responseMsg, setResponseMsg] = useState({ success: null, msg: "" });
  const [formErrors, setFormErrors] = useState(INITIAL_ERROR_STATE);
  const [disabled, setDisabled] = useState(true);
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    if (props && props.userData) {
      setFormState(props.userData);
    }
  }, [props]);

  const handleInputChange = (e) => {
    const target = e.target;

    validate(target.name, target.value);

    setFormState({ ...formState, [target.name]: target.value });
  };

  const validate = (name, value) => {
    yup
      .reach(signupSchema, name)
      .validate(value)
      .then((valid) => {
        setFormChanged(true);
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  useEffect(() => {
    signupSchema.isValid(formState).then((valid) => {
      setDisabled(!valid);
    });
  }, [formState]);

  useEffect(() => {

    signupSchema.isValid(formChanged).then((valid) => {
      setDisabled(!valid);
    });
  }, [formChanged]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/register", formState)
      .then((res) => {
        console.log(res);
        if (res.statusText === "Created") {
          console.log("New account is created successfully.");
          const successMsg = props.btn
            ? "Account is updated successfully."
            : "New account is created successfully.";
          setFormState(INITIAL_FORM_STATE);
          setResponseMsg({
            success: true,
            msg: successMsg,
          });
        }
        window.location = '/login'
      })
      .catch((err) => {
        // debugger;
        if (err.response) {
          console.log(err.response);
          setResponseMsg({
            success: false,
            msg: err.response.data.message,
          });
        }
      });
  };

  const classes=useStyles(); // for material UI styling

  return (
    <div>
            <h1 className={classes.h1}>Acc<RedditIcon style={{ fontSize: 40 }}  />unt <br />Information</h1>
      {responseMsg.success !== null && (
        <p
          className={`text-center ${
            responseMsg.success ? "text-success" : "text-danger"
          }`}
        >
          {responseMsg.msg}
        </p>
      )}
      <form className={classes.form} onSubmit={onFormSubmit}>
          <label className={classes.labelUsername}>
            Username <br />
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formState.username}
              onChange={handleInputChange}
              className={classes.input}
            />
            <div className="text-danger">{formErrors.username}</div>
          </label>
          <label className={classes.labelEmail}>
            Email <br />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={formState.email}
              onChange={handleInputChange}
              className={classes.input}
            />
            <div className="text-danger">{formErrors.email}</div>
          </label>
          <label className={classes.labelPassword}>
            Password <br />
            <input
              name="password"
              type="password"
              value={formState.password}
              onChange={handleInputChange}
              className={classes.input}
            />
            <div className="text-danger">{formErrors.password}</div>
          </label>
        <SignUpButton type='submit' disabled={disabled} name="loginButton">
          submit
        </SignUpButton>
      </form>
    </div>
  );
};


const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgb(252,140,3, .3)',
    width: '25%',
    margin: '0 auto',
    borderRadius: '5px',
    padding: '2%'
  },
  labelUsername: {
    marginTop: '5%',
    fontSize: '1.5em',
  },
  labelPassword: {
    fontSize: '1.5em',
    marginTop: '2%',
  },
  labelEmail: {
    fontSize: '1.5em',
    marginTop: '2%',
  },
  input: {
    borderRadius: '5px',
  },
  h1: {
    fontSize: '4em',
    margin: '5% auto',
    border: '2px solid orange',
    width: '40%'
},
}));

const SignUpButton = styled(Button)({
  background: 'linear-gradient(45deg, blue 1%, rgb(252,140,3) 90%)',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: '1.5em',
  marginTop: '2%',
});


export default SignUp;