import React, { useState } from "react";
// import axiosWithAuth from "../utlis/axiosWithAuth";
import axios from 'axios'

const initialState = {
        post_title: "",
        post_content: "",
        Image: 0,
        Video: 0,
        External_link: 0
}

const PostSearch = (props) => {
    const [searchInput, setSearchInput] = useState(initialState);
    

    const onSubmit = () => {
        console.log(searchInput);
        axios
        .post(`https://reddit-sami.herokuapp.com/api/posts/prediction`, searchInput)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    };
  

    const inputChanges = e => {
        const {name, value} = e.target;
        setSearchInput({
            ...searchInput,
            [name]: value
        })
    }

    return (
      <div>
       <input
        name="post_title"
        type="text"
        placeholder="Search Title"
        value={searchInput.post_title}
        onChange={inputChanges}
      />
      <input
        name="post_content"
        type="text"
        placeholder="Search Content"
        value={searchInput.post_content}
        onChange={inputChanges}
      />
      <button onClick={onSubmit}>Search</button>
      </div>
    );
  }

  export default PostSearch;