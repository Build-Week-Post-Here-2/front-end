import React from "react";
import SignUp from './SignUp'
import { makeStyles } from '@material-ui/core/styles'
import RedditIcon from '@material-ui/icons/Reddit'

const Landing = (props) => {

  const classes=useStyles(); // for material UI styling

  return (
    <div>
      <h1 className={classes.h1}>P<RedditIcon style={{ fontSize: 40 }}  />st<br /> Here</h1>
      <p className={classes.p}>It's a simple problem, really. You have the content, but you do not know which subreddit to share it on so that it gets all the glory it deserves. Good news - we figured it out for you! No more need for endless subreddit searching to find the right home for your posts. It's easy (we promise!). Sign up, share your post with us, and we will send you on your way to internet stardom.<br /> <br /> What are you waiting for?
            </p>
            <SignUp />
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

export default Landing;