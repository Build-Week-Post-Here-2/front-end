import React, {useState} from 'react'


const initialFormValues = {
    post_title: 'my new post',
    post_content: 'nice post',
    user_id: 1
}

const AddPost = () => {
    const [add, setAdd] = useState(initialFormValues)
    
    const handleChange = (e) =>{
        setAdd({
            ...add,
            [e.target.name]: e.target.value
          });
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setAdd(initialFormValues)
    }

    return (
        
        <div>
        <h3>Add a new Post!</h3>
                <form onSubmit={handleSubmit} className="hidden">
                    <div>
                        <label>
                            <h4>Title: </h4>
                            <input
                            name='name'
                            value={add.post_title}
                            onChange={handleChange} >
                            </input>
                        </label>
                    </div>
                </form>
                <form>
                <input
                            name='name'
                            value={add.post_content}
                            onChange={handleChange} >
                            </input>
                </form>
        </div> 
    )
}

export default AddPost