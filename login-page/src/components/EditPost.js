import React, {useState} from 'react'
import axiosWithAuth from '../utlis/axiosWithAuth'
import {useParams} from 'react-router-dom'

const initialState = {

}

const EditPost = ({data, post_title, post_content}) => {
const [editing, setEditing] = useState(false)
const [toEdit, setToEdit] = useState(initialState);
const {id} = useParams();    

const editPost = post => {
    setToEdit(true);
    setEditing(post);
}

const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/posts/${id}`, toEdit)
        .then(res => {
          
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