import React, {useState} from 'react'
import axiosWithAuth from '../utlis/axiosWithAuth'

const DeletePost = () => {

    const delPost = posts => {
        axiosWithAuth()
            .delete(`/posts/${posts.id}`)
            .then( res => {
                console.log(res)
                console.log(res.data)
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