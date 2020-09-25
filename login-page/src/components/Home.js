import React from 'react'
import { styled, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import RedditIcon from '@material-ui/icons/Reddit'
import NewPost from './CreateNewPost'
import 'fontsource-roboto'
import PostSearch from './PostSearch'

const Home = () => {

    const classes=useStyles();

    return (
        <div>
            <h1 className={classes.h1}>P<RedditIcon style={{ fontSize: 40 }}  />st<br /> Here</h1>
            <img src={ require('../images/reddit-alient.png') } />

            <NewPost />
            <br/>
            <PostSearch/>
            <br/>
            <br/>
        </div>
    )
}
//styles
const useStyles = makeStyles(theme => ({
    p: {
        fontFamily: 'Roboto',
        fontSize: '2em',
        margin: '5%',
        background:'rgb(252,140,3, .3)',
        borderRadius: '5px',
        padding: '5%',
    },
    h1: {
        fontSize: '4em',
        margin: '5% auto',
        border: '2px solid orange',
        width: '25%'
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
    img: {
        padding: '10%',
    }
  }));

const CreatePostButton = styled(Button)({
    background: 'linear-gradient(45deg, blue 10%, rgb(252, 140, 3) 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontSize: '1.5em',
    marginBottom: '5%',
  });




export default Home