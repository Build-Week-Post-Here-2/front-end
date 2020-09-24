import React, { useState } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";

const initialState = {};

const EditPost = ({ data, post_title, post_content }) => {
  const [editing, setEditing] = useState(false);
  const [toEdit, setToEdit] = useState(initialState);

  const editPost = (post) => {
    setToEdit(true);
    setEditing(post);
  };

  const saveEdit = (e) => {
    const postId = e.target.parentElement.getAttribute("dataset");
    e.preventDefault();
    // axiosWithAuth()
    //   .put(`/posts/${postId}`, toEdit)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return <button onClick={saveEdit}>Edit</button>;
};

export default EditPost;
