import React, { useState, useEffect } from "react";
import SavedCard from "./SavedCard";
import UserSearchPost from "./UserPostSearch";
//styles
import RedditIcon from "@material-ui/icons/Reddit";
import { makeStyles } from "@material-ui/core/styles";
import axiosWithAuth from "../utlis/axiosWithAuth";

export default function Saved() {

  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState(false);
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    const id = window.localStorage.getItem("uid");
    if (id && saved.length === 0 && !done) {
      setDone(true);
      axiosWithAuth()
        .get(`/users/${id}/posts`)
        .then((res) => {
          setSaved(res.data.data.posts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [saved]);

  const toggleSearch = (posts) => {
    setSearched(posts);
  };

  const classes = useStyles(); //for materialUI Styles

  return (
    <div>
      <h1 className={classes.h1}>
        Saved <br /> P<RedditIcon />
        sts
      </h1>
      <UserSearchPost posts={saved} toggleSearch={toggleSearch} />
      {searched.length > 0 &&
        searched.map((postInfo, i) => {
          return (
            <SavedCard
              key={postInfo.id}
              name={postInfo.post_title}
              content={postInfo.post_content}
            />
          );
        })}
      {searched.length === 0 &&
        saved.map((postInfo, i) => {
          return (
            <SavedCard
              key={postInfo.id}
              name={postInfo.post_title}
              content={postInfo.post_content}
              pid={postInfo.id}
            />
          );
        })}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "4em",
    margin: "5% auto",
    border: "2px solid orange",
    width: "25%",
  },
}));
