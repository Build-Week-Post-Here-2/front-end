import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SavedCard from './SavedCard'
import { useParams } from 'react-router-dom';



export default function Saved() {

    const { id } = useParams()

    const [saved, setSaved] = useState ([])

    useEffect(() => {
        axios.get(`https://reddit-sami.herokuapp.com/api/users/${id}/posts`)
        .then(res =>{
            console.log(res.data.data.posts)
            setSaved(res.data.data.posts)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div> 
            {saved.map(postInfo => {
                return <SavedCard
                name={postInfo.post_title}
                content={postInfo.post_content}
                />
            })}
        </div>
    )

}