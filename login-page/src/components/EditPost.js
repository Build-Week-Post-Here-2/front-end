import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import NewPost from "./CreateNewPost";

import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const initFormVals = {
  post_title: "",
  post_content: "",
};

const EditPost = (props) => {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [postData, setPostData] = useState(initFormVals);
  const [postId, setPostId] = useState(null);

  const classes = useStyles();

  const handleOpen = (e) => {
    const postId = props.data.pid;
    const title = props.data.name;
    const content = props.data.content;

    setPostData({ post_title: title, post_content: content });
    setPostId(postId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <EditButton onClick={handleOpen}>Edit</EditButton>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <NewPost postData={postData} postId={postId} />
        </div>
      </Modal>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50 + Math.round(Math.random() * 20) - 10;
  const left = 50 + Math.round(Math.random() * 20) - 10;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const EditButton = styled(Button)({
  background: "linear-gradient(280deg, blue 50%, rgb(252,140,3) 90%)",
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 48,
  padding: "0 30px",
  fontSize: "1.5em",
  marginTop: "2%",
});

export default EditPost;
