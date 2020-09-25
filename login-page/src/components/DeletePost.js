import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../utlis/axiosWithAuth'
import { useDispatch } from 'react-redux'
import { DEL_POST } from '../store'

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
            <button onClick={delPost}>Delete</button>
        </div>
    )
}

export default DeletePost