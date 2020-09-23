import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../Validation/loginFormSchema";
import axiosWithAuth from "../utlis/axiosWithAuth";
import { styled, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import { LOG_ON_SUCCESS, reducer } from "../store";
// import { useDispatch } from "react-redux";

const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

const LoginForm = (props) => {
  // const dispatch = useDispatch();
  const initialDisabled = true;

  const [login, setLogin] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewLogin = (newLogin) => {
    axiosWithAuth()
      .post("https://reddit-sami.herokuapp.com/api/users/login", newLogin)
      .then((res) => {
        setLogin([...login, newLogin]);
        setFormValues(initialFormValues);
        // dispatch({
        //   type: LOG_ON_SUCCESS,
        //   payload: {
        //     username: res.data.data.username,
        //     email: res.data.data.email,
        //     password: res.data.data.password,
        //   },
        // });
        window.localStorage.setItem("token", res.data.token);
        window.location = '/home'
        window.localStorage.setItem("username", res.data.data.username);
        window.localStorage.setItem("email", res.data.data.email);
        window.localStorage.setItem("uid", res.data.data.id);
      })
      .catch((err) => {
        alert(
          "There was an error logging you in, please reload the page and try again."
        );
        console.log(err);
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    postNewLogin(newLogin);
  };

  const validate = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
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
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const classes = useStyles(); // for material UI styling

  return (
    <div>
      <form className={classes.form} onSubmit={formSubmit}>
        <label className={classes.labelUsername}>
          {" "}
          Username <br />
          <input
            type="text"
            name="username"
            value={formValues.username}
            placeholder="Username"
            onChange={validate}
            className={classes.input}
          />
          <div>{formErrors.username}</div>
        </label>{" "}
        <br />

        <label className = {classes.labelPassword}>
          Password <br />
          <input
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Password"
            onChange={validate}
            className={classes.input}
          />
        </label>
        <div>{formErrors.password}</div>
        <button disabled={disabled} name="loginButton">
          Login
        </button>
      </form>
    </div>
  );
};
//STYLES
const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  labelUsername: {
    marginTop: "5%",
    fontSize: "1.5em",
  },
  labelPassword: {
    fontSize: "1.5em",
  },
  input: {
    borderRadius: "5px",
  },
}));

const LogInButton = styled(Button)({
  background: "linear-gradient(45deg, blue 1%, rgb(252,140,3) 90%)",
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 48,
  padding: "0 30px",
  fontSize: "1.5em",
  marginTop: "2%",
});

export default LoginForm;
