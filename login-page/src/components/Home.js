import React from 'react'
import { styled, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import RedditIcon from '@material-ui/icons/Reddit'
import NewPost from './CreateNewPost'
import 'fontsource-roboto'
import AddPost from './AddPost';
import PostSearch from './PostSearch'

const Home = () => {

    const classes=useStyles();

    return (
        
        <div>
            <h1 className={classes.h1}>P<RedditIcon style={{ fontSize: 40 }}  />st<br /> Here</h1>
            <img src={ require('../images/reddit-alient.png') } />
            <p className={classes.p}>It's a simple problem, really. You have the content, but you do not know which subreddit to share it on so that it gets all the glory it deserves. Good news - we figured it out for you! No more need for endless subreddit searching to find the right home for your posts. It's easy (we promise!). Sign up, share your post with us, and we will send you on your way to internet stardom.<br /> <br /> What are you waiting for? Try it out!
            </p>
            <NewPost />
            <PostSearch/>
            <h2>Popular Subreddits</h2> <br />
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