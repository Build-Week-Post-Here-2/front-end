import React from "react";
import { useDispatch } from "react-redux";
import { useState, useSelector } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";
import {
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
} from "../store";
//STYLE IMPORTS
import { styled, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const initFormVals = {
  post_title: "",
  post_content: "",
};

const NewPost = () => {
  const dispatch = useDispatch();
  const [formVal, setFormVal] = useState(initFormVals);
  // const user = useSelector(state => state.user)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: CREATE_POST_START });
    const id = window.localStorage.getItem("uid");
    const data = formVal;
    data.user_id = id;
    // console.log(data);
    axiosWithAuth()
      .post(`/posts`, data)
      .then((res) => {
        dispatch({ type: CREATE_POST_SUCCESS, payload: res.data.data });
        // console.log("CREATE POST RESPONSE: ", res);
        // setFormVal(initFormVals);
      })
      .catch((err) => {
        dispatch({ type: CREATE_POST_FAIL });
        setFormVal(initFormVals);
        console.log(err);
      });
  };
  const handleChanges = (e) => {
    e.persist();
    setFormVal({
      ...formVal,
      [e.target.name]: e.target.value,
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form id="create-list" onSubmit={handleSubmit}>
        <label className={classes.label} htmlFor="title">
          <h3>Create a new post!</h3>
          <input
            name="post_title"
            type="text"
            placeholder="Title"
            onChange={handleChanges}
            value={formVal.post_title}
          />
          <textarea
            name="post_content"
            value={formVal.post_content}
            placeholder="Your post"
            onChange={handleChanges}
          />
        </label>
        <br />
        <CreatePostButton type="submit">Submit</CreatePostButton>
      </form>
    </div>
  );
};

const CreatePostButton = styled(Button)({
  background: "linear-gradient(45deg, blue 10%, rgb(252, 140, 3) 90%)",
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 48,
  padding: "0 30px",
  fontSize: "1.5em",
  marginBottom: "5%",
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em",
    margin: "5% auto",
    background: "rgb(252,140,3, .3)",
    borderRadius: "5px",
    padding: "5%",
    width: "60%",
  },
  label: {
    margin: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default NewPost;
