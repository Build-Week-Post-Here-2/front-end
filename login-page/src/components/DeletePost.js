import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../utlis/axiosWithAuth'
import { useDispatch } from 'react-redux'
import { DEL_POST } from '../store'

import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const DeletePost = ({pid, name, content}) => {
    const dispatch = useDispatch()
    const {push} = useHistory()

    const delPost = (e) => {
        axiosWithAuth()
            .delete(`/posts/${pid}`)
            .then( res => {
                console.log(res)
                dispatch({type: DEL_POST, payload: {name: name, content: content}})
                push('/savedposts')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <DeleteButton onClick={delPost}>
                Delete
            </DeleteButton>
        </div>
    )
}

const DeleteButton = styled(Button)({
    background: "linear-gradient(280deg, blue 10%, rgb(252,140,3) 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px",
    fontSize: "1.5em",
    marginTop: "2%",
  });

export default DeletePost