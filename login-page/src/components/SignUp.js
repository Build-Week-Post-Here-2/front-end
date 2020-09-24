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
      <h1 className={classes.h1}>P<RedditIcon style={{ fontSize: 40 }}  />st<br /> Here</h1>
      <p className={classes.p}>It's a simple problem, really. You have the content, but you do not know which subreddit to share it on so that it gets all the glory it deserves. Good news - we figured it out for you! No more need for endless subreddit searching to find the right home for your posts. It's easy (we promise!). Sign up, share your post with us, and we will send you on your way to internet stardom.<br /> <br /> What are you waiting for?
            </p>
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
        <h3>Create an Account</h3>
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
      <h2 className={classes.h2}>Popular Subreddits</h2> <br />
      <div className={classes.container}>
                <div>
                    <img className={classes.img} src={ require('../images/Reddit_Mark_OnDark.png') } />
                    <h4>r/announcements</h4>
                </div>
                <div>
                    <img className={classes.img} src={ require('../images/Reddit_Mark_OnDark.png') } />
                    <h4>r/gaming</h4>
                </div>
                <div>
                    <img className={classes.img} src={ require('../images/Reddit_Mark_OnDark.png') } />
                    <h4>r/funny</h4>
                </div>
                <div>
                    <img className={classes.img} src={ require('../images/Reddit_Mark_OnDark.png') } />
                    <h4>r/AskReddit</h4>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className={classes.container}>
                <div>
                    <img className={classes.img} src={ require('../images/Reddit_Mark_OnDark.png') } />
                    <h4>r/pics</h4>
                </div>
                <div>
                    <img className={classes.img} src={ require('../images/Reddit_Mark_OnDark.png') } />
                    <h4>r/science</h4>
                </div>
                <div>
                    <img className={classes.img} src={ require('../images/Reddit_Mark_OnDark.png') } />
                    <h4>r/WorldNews</h4>
                </div>
                <div>
                    <img className={classes.img} src={ require('../images/Reddit_Mark_OnDark.png') } />
                    <h4>r/aww</h4>
                </div>
            </div>

    </div>
  );
};


const useStyles = makeStyles(theme => ({
  h1: {
    fontSize: '4em',
    margin: '5% auto',
    border: '2px solid orange',
    width: '25%'
},
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
  p: {
    fontFamily: 'Roboto',
    fontSize: '2em',
    margin: '5% 5% 2% 5%',
    background:'rgb(252,140,3, .3)',
    borderRadius: '5px',
    padding: '5% 5% 2% 5%',
},
h2: {
  marginTop: '5%',
  fontSize: '3em'
},
container: {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-around',
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

//OLD LOGIN BUTTON
{/* </div> */}
{/* {props.btn ? (
  <input
    type="submit"
    value={props.btn}
    className={`${disabled ? "disabled" : "active"}`}
  />
  ) : (
  <input
    type="submit"
    value={"Sign Up"}
    // className={classes.input}
    className={`${disabled ? "disabled" : "active"}`}
  />
)} */}