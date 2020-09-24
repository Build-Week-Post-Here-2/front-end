import React, { useEffect, useState } from "react";

const PostSearch = (props) => {
  const [postSearch, setSearchInput] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    const result = props.posts.filter((post) => {
      return post["post_title"].includes(searchInput);
    });
    setFilteredPosts(result);
  };

  useEffect(() => {

});

export default PostSearch;