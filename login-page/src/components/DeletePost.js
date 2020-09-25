import React from 'react'
import axiosWithAuth from '../utlis/axiosWithAuth'
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const DeletePost = (props) => {
    console.log("this is the props", props)
    const delPost = (e) => {
        axiosWithAuth()
            .delete(`/posts/${props.data.pid}`)
            .then( res => {
                console.log(res)
                window.location = '/savedposts'
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