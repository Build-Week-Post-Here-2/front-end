import React from 'react'
import axiosWithAuth from '../utlis/axiosWithAuth'

const DeletePost = (props) => {

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
            <button onClick={delPost}>Delete</button>
        </div>
    )
}

export default DeletePost