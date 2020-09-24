import React, { useEffect, useState } from "react";
import NewPost from "./CreateNewPost";

const PostSearch = (props) => {
    const [renderedPosts, setRenderedPosts] = useState([])
  
    useEffect(() => {
      const newPost = {
        title: props.data.post_title,
        content: props.data.post_content,
        subreddit: props.data.Subreddits,
        Image: 0,
        Video: 0,
        External_Link: 0,
        user_id: localStorage.getItem('userId')
      }

      setRenderedPosts([...renderedPosts, newPost]);
    }, [props.posts]);
  
    return (
      <div>
        {
          renderedPosts.map((post_content, index) => {
            return post_content.title ? <NewPost key={index} item={post_content} /> : null
  
        }
      )}
      </div>
    );
  }

  export default PostSearch;