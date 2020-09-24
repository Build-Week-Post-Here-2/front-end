import React from "react";
import { styled, makeStyles } from "@material-ui/core/styles";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import { TextareaAutosize } from "@material-ui/core";

const SavedCard = (props) => {
  const classes = useStyles(); // for material UI styling
  return (
    <div className={classes.div}>
      <h2 className={classes.h2}>Post Name: {props.name}</h2>
      <h3 className={classes.h3}>Post Content: {props.content}</h3>
      <DeletePost />
      <EditPost />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  div: {
    margin: "5% auto",
    background: "rgb(252,140,3, .6)",
    width: "55%",
    borderRadius: "5px",
    padding: "5% 0",
  },
  h2: {
    margin: "2%",
    padding: "2%",
    fontSize: "1.5em",
    background: "white",
    borderRadius: "5px",
    width: "50%",
    margin: "0 auto",
  },
  h3: {
    margin: "2%",
    padding: "2%",
    fontSize: "1em",
  },
}));

export default SavedCard;
