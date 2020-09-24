import React, { useEffect, useState } from "react";

const UserSearchPost = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    const result = props.posts.filter((post) => {
      return post["post_title"].includes(searchInput);
    });
    setFilteredPosts(result);
  };

  useEffect(() => {
    if (filteredPosts.length > 0) {
      console.log(filteredPosts);
      props.toggleSearch(filteredPosts);
    }
  }, [filteredPosts]);
  return (
    <input type="search" value={searchInput} onChange={handleInputChange} />
  );
};

export default UserSearchPost;
