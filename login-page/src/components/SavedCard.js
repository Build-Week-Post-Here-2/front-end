import React from 'react'
import { styled, makeStyles } from '@material-ui/core/styles'
import DeletePost from "./DeletePost";
import EditPost from './EditPost'

const SavedCard = (props) => {
    const classes=useStyles(); // for material UI styling
    return(
        <div className = {classes.div}>
            <h2 className = {classes.h2}>Post Name: {props.name}</h2>
            <h3 className = {classes.h3}>Post Content: {props.content}</h3>
            <DeletePost/>
            <EditPost/>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
  div: {
    border: '2px solid rgb(252,140,3)'
  },
  h2: {
    margin: '2%',
    padding: '2%',
    fontSize: '1.5em',
  },
  h3: {
    margin: '2%',
    padding: '2%',
    fontSize: '1.5em',
  },
}));

export default SavedCard;