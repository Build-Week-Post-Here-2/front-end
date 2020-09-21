import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SavedCard from './SavedCard'

const Saved = () =>{

    const [saved, setSaved] = useState ([])

    useEffect(() => {
        axios.get('https://reddit-sami.herokuapp.com/api/users/:id/posts')

        .then(res =>{
            console.log(res.data)
            setSaved(res.data)
        })

        .catch(err => {
            console.log(err)
        })
    }, [])


    
    return (
        <div> 
            {saved.map(postInfo => {
                return <SavedCard
                name={postInfo.name}
                content={postInfo.content}
                />
            })}
        </div>
    )

}

export default Character;