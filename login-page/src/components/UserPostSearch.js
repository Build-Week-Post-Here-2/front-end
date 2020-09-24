import React, { useEffect, useState } from "react";
import PageviewIcon from "@material-ui/icons/Pageview";

const UserSearchPost = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(null);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      const result = props.posts.filter((post) => {
        return post["post_title"].includes(searchInput);
      });
      setFilteredPosts(result);
    }
  };

  useEffect(() => {
    if (filteredPosts !== null) {
      props.toggleSearch(filteredPosts);
    }
  }, [filteredPosts]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search Titles"
        value={searchInput}
        onChange={handleInputChange}
      />
      <PageviewIcon style={{ fontSize: 45 }} />
    </div>
  );
};

export default UserSearchPost;
