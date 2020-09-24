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
import TextField from '@material-ui/core/TextField';

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
    console.log(data);
    axiosWithAuth()
      .post(`/posts`, data)
      .then((res) => {
        formVal.post_title.split("-").join(" ");
        dispatch({ type: CREATE_POST_SUCCESS, payload: formVal });
        console.log("CREATE POST RESPONSE: ", res);
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
      <form onSubmit={handleSubmit} >
        <div className={classes.root} >
        <TextField name='post_title' onChange={handleChanges} value={formVal.post_title} id="outlined-basic" label="Post Title Here" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={6}
          defaultValue="Post Content Here"
          variant="outlined"
          name="post_content"
          value={formVal.post_content}
          placeholder="Your post"
          onChange={handleChanges}
        />
        </div>
        <CreatePostButton type="submit">Submit</CreatePostButton>
    </form>
    </div>
  );
};

const CreatePostButton = styled(Button)({
  background: "linear-gradient(45deg, blue 10%, rgb(252, 140, 3) 90%)",
  border: 0,
  borderRadius: '5px',
  color: "white",
  padding: "0 15px",
  fontSize: "1em",
  marginBottom: "2%",
});

const useStyles = makeStyles((theme) => ({
  container: {
    fontSize: "2em",
    margin: "0 auto",
    background: "rgb(252,140,3, .3)",
    borderRadius: "5px",
    padding: "1%",
    width: "60%",
  },
  root: {
    '& > *': {
      margin: '2% auto',
      width: '90%',
    },
  },
}));

export default NewPost;