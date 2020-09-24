import React, { useState, useSelector } from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../utlis/axiosWithAuth'
import { CREATE_POST_START,CREATE_POST_SUCCESS, CREATE_POST_FAIL } from '../store'
import AddPost from './AddPost'

const initFormVals = {
    post_title : "my new post",
    post_content : "nice post",
    user_id : 1
}

const someObj = {}

const NewPost = () => {
    const dispatch = useDispatch()
    const [formVal, setFormVal] = useState(initFormVals)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: CREATE_POST_START })
        console.log(formVal)
        axiosWithAuth()
            .put(`users/posts`, someObj)
            .then(res => {
                dispatch({ type: CREATE_POST_SUCCESS, payload: formVal })
                console.log("CREATE POST RESPONSE: ", res)
                setFormVal(initFormVals)
            })
            .catch(err => {
                dispatch({ type: CREATE_POST_FAIL})
                console.log(err)})
    }
    const handleChanges = e => {
        e.preventDefault();
        setFormVal({
            [e.target.name]: e.target.value
        })
    }


    return (
       
            <div>
                <AddPost/>
                    <button onClick={handleSubmit} type="submit">Submit</button>
            </div>
        
    )
}

export default NewPost