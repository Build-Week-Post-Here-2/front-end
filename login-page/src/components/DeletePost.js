import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const DeletePost = () => {
    // const {id} = useParams()
    const delPost = (e) => {
        e.preventDefault();
        axios
            .delete(`/posts}`)
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