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
    setToEdit(true);
    setEditing(post);
}

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

      return (
          <button onClick={saveEdit}>Edit</button>
      )
}

export default EditPost;