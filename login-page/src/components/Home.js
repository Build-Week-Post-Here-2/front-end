import React from 'react'

const Home = () => {


    return (

        <div>
            <h1>Home Page</h1>
            <h2>Post Here</h2>
            <img src={ require('../images/reddit-alient.png') } />
            <p>It's a simple problem, really. You have the content, but you do not know which subreddit to share it on so that it gets all the glory it deserves. Good news - we figured it out for you! No more need for endless subreddit searching to find the right home for your posts. It's easy (we promise!). Sign up, share your post with us, and we will send you on your way to internet stardom.<br /> <br /> What are you waiting for? Click here to get started:
            </p>
            <button>Sign Up</button>
        </div>

    )
        
    

}

export default Home