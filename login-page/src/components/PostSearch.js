import React, { useState } from "react";
// import axiosWithAuth from "../utlis/axiosWithAuth";
import axios from 'axios'

import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
      /> <br /> <br /> 
      <input
        name="post_content"
        type="text"
        placeholder="Search Content"
        value={searchInput.post_content}
        onChange={inputChanges}
      /> <br />
      <SearchButton type='submit' onClick={onSubmit}>Search</SearchButton>
      </div>
    );
  }

  const SearchButton = styled(Button)({
    background: "linear-gradient(280deg, blue 10%, rgb(252,140,3) 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px",
    fontSize: "1.5em",
    marginTop: "2%",
  });


  export default PostSearch;