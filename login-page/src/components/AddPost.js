import React, {useState, useEffect} from 'react'
import {ADD_POST_START, ADD_POST_SUCCESS} from '../store'
import {dispatch} from 'react-redux'

const AddPost = () => {
    const [add, setAdd] = useState()

    const handleChange = (e) =>{
        setAdd({
            ...add,
            [e.target.name]: e.target.value
          });
    }

    return {
        
    }

}

export default AddPost