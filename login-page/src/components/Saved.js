import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../utlis/axiosWithAuth";
import SavedCard from "./SavedCard";
import { useParams } from "react-router-dom";

export default function Saved() {
  // const { id } = useParams()

  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const id = window.localStorage.getItem("uid");
    if (id && saved.length === 0) {
      axiosWithAuth()
        .get(`/users/${id}/posts`)
        .then((res) => {
          //   console.log(res);
          setSaved(res.data.data.posts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [saved]);

  return (
    <div>
      {saved.map((postInfo, i) => {
        console.log(postInfo);
        return (
          <SavedCard
            key={i}
            name={postInfo.post_title}
            content={postInfo.post_content}
          />
        );
      })}
    </div>
  );
}
