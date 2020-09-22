import React from 'react'
import { styled, makeStyles } from '@material-ui/core/styles'
import { Button, Link } from '@material-ui/core'
import RedditIcon from '@material-ui/icons/Reddit';
// import "fontsource-roboto/500.css"
import SignUp from './SignUp';

const Home = () => {

    const classes=useStyles();

    return (
        <div>
            <h1 className={classes.h1}>P<RedditIcon style={{ fontSize: 40 }}  />st Here</h1>
            <img src={ require('../images/reddit-alient.png') } />
            <p className={classes.p}>It's a simple problem, really. You have the content, but you do not know which subreddit to share it on so that it gets all the glory it deserves. Good news - we figured it out for you! No more need for endless subreddit searching to find the right home for your posts. It's easy (we promise!). Sign up, share your post with us, and we will send you on your way to internet stardom.<br /> <br /> What are you waiting for? Click here to get started:
            </p>
            <Link to={SignUp}>
            <SignUpButton>Sign Up</SignUpButton>
            </Link>
        </div>
    )
}
//styles
const useStyles = makeStyles(theme => ({
    p: {
        fontSize: '2em',
        margin: '5%'
    },
    h1: {
        fontSize: '4em',
        margin: '5% auto',
        border: '2px solid orange',
        width: '25%'
    }
  }));

const SignUpButton = styled(Button)({
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