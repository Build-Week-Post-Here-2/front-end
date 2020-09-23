import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import { useDispatch  } from 'react-redux'
import { DEL_POST } from '../store'

const DeletePost = () => {
    const dispatch = useDispatch()
    const { push } = useHistory()

    const delPost = (e) => {
        axiosWithAuth()
            .delete(`/users/${id}`)
            .then( res => {
                dispatch({ type: DEL_POST, payload: { name: name, listid: listid}})
                push('/home')
            })
    }

    return (
        <div>
            <button onClick={delPost}>Delete</button>
        </div>
    )
}

export default DeletePost