import React, {useState} from 'react'
import axiosWithAuth from '../utlis/axiosWithAuth'
import {useParams} from 'react-router-dom'
import {DEL_POST} from '../store/actions/index'
import {useDispatch} from 'react-redux'

const initialDel = {
    data: {
    deleteMessage: 'you have deleted 1 post'
    }
}

const DeletePost = ({posts}) => {
    const [del, setDel] = useState(initialDel);
    const {id} = useParams();
    const {dispatch} = useDispatch();
    const delPost = e => {
        axiosWithAuth()
            .delete(`/posts/${id}`)
            .then( res => {
                dispatch({type: DEL_POST, payload: id})
                
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