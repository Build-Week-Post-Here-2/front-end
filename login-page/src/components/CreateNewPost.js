import React from 'react'
import { useDispatch } from 'react-router-dom'
import axiosWithAuth from '../utlis/axiosWithAuth'
import { CREATE_POST_START,CREATE_POST_SUCCESS, CREATE_POST_FAIL } from '../store'

const initFormVals = {
    post_title : "",
    post_content : "",
    user_id : 1,
}

const someObj = {}

const NewPost = () => {
    const dispatch = useDispatch()
    const [formVal, setFormVal] = useState(initFormVals)
    const user = useSelector(state => state.user)
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: CREATE_POST_START })
        console.log(formVal)
        axiosWithAuth()
            .post(`users/posts/${user.id}`, someObj)
            .then(res => {
                formVal.title.split('-').join(' ')
                dispatch({ type: CREATE_POST_SUCCESS, payload: formVal })
                console.log("CREATE POST RESPONSE: ", res)
                setFormVal(initFormVals)
            })
            .catch(err => {
                dispatch({ type: CREATE_POST_FAIL})
                setFormVal(initFormVals)
                console.log(err)})
    }
    const handleChanges = e => {
        e.persist()
        setFormVal({
            [e.target.name]: e.target.value
        })
    }


    return (
       
            <div>
                <form id="create-list" onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        <h3>Create a new post!</h3>
                        <input 
                            name="textbox"
                            type="text"
                            placeholder="Type Here"
                            onChange={handleChanges}
                            value={formVal.title}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        
    )
}

export default NewPost