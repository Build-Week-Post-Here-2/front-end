import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import { useDispatch  } from 'react-redux'

const initialDel = {
    post_title: '',
    post_content: ''
}

const DeletePost = () => {
    const [del, setDel] = useState(initialDel);
    const [edit, setEdit] = useState(false);

    const delPost = (e) => {
        axiosWithAuth()
            .delete(`/posts/${e.id}`)
            .then( res => {
                updatePosts(
                    e.filter((item) => item.id !== colors.id)
                )
            })
    }

    return (
        <div>
            <button onClick={delPost}>Delete</button>
        </div>
    )
}

export default DeletePost