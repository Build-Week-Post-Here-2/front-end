import React, {useState} from 'react'
import {ADD_POST_START, ADD_POST_SUCCESS} from '../store'
import {useDispatch} from 'react-redux'

const AddPost = () => {
    const [add, setAdd] = useState()
    const dispatch = useDispatch()
    
    const handleChange = (e) =>{
        setAdd({
            ...add,
            [e.target.name]: e.target.value
          });
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newPost ={
            name: add.name.trim(),
            description:add.description.trim(),
            date: add.date.trim(),
            frequency:add.frequency.trim(),
    
        }
        postNewTodo(newPost)
        setAdd(initialFormValues)
    }
    const postNewTodo = post =>{
        console.log("POST PAYLOAD: ", post)
        dispatch({ type: ADD_POST_START })
        axiosWithAuth()
        .post(`/user/posts`, post)
        .then(res =>{
          dispatch({ type: ADD_POST_SUCCESS, payload: {todoVals: post, list: listTitle}})
          console.log("NEW POST RESPONSE: ", res.data);
        })
        .catch(err =>{
          console.log(err)
        })
      }

    return (
        
        <div>
        <button onClick={toggle}>Add New Post!</button>
                <form onSubmit={handleSubmit} id="form" className="hidden">
                    <div>
                        <label>
                            <h4>Title: </h4>
                            <input
                            name='name'
                            value={form.name}
                            onChange={handleChange} >
                            </input>
                        </label>
                    </div>
                </form>
        </div> 
    )
}

export default AddPost