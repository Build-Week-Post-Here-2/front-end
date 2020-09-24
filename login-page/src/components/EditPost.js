<<<<<<< HEAD
import React, {useState} from 'react'
import axiosWithAuth from '../utlis/axiosWithAuth'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'

const initialState = {
    post_title: "updating title",
    post_content: "nice update"
}

const EditPost = ({data, post_title, post_content}) => {
const [editing, setEditing] = useState(false)
const [toEdit, setToEdit] = useState(initialState);
const {id} = useParams();    
const dispatch = useDispatch();


const editPost = post => {
=======
import React, { useState } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";

const initialState = {};

const EditPost = ({ data, post_title, post_content }) => {
  const [editing, setEditing] = useState(false);
  const [toEdit, setToEdit] = useState(initialState);

  const editPost = (post) => {
>>>>>>> 38ea17fa2d8c9505347857cbe7fab39363a2ebd8
    setToEdit(true);
    setEditing(post);
  };

<<<<<<< HEAD
const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/posts/${id}`, toEdit)
        .then(res => {
          dispatch()
        })
        .catch(err => {
            console.log(err);
        })
      };
=======
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
>>>>>>> 38ea17fa2d8c9505347857cbe7fab39363a2ebd8

  return <button onClick={saveEdit}>Edit</button>;
};

export default EditPost;
