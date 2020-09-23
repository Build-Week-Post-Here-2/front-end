import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SavedCard from './SavedCard'
import { useParams } from 'react-router-dom';
//styles
import RedditIcon from '@material-ui/icons/Reddit';
import { makeStyles } from '@material-ui/core/styles'



export default function Saved() {

    const { id } = useParams()

    const [saved, setSaved] = useState ([])

    useEffect(() => {
        axios
        .get(`/users/${id}/posts`)
        .then(res =>{
            console.log(res.data.data.posts)
            setSaved(res.data.data.posts)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const classes=useStyles(); //for materialUI Styles

    return (

        <div> 
            <h1 className={classes.h1}>Saved P<RedditIcon />sts</h1>
            {saved.map(postInfo => {
                return <SavedCard
                name={postInfo.post_title}
                content={postInfo.post_content}
                />
            })}
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    h1: {
        fontSize: '4em',
        margin: '5% auto',
        border: '2px solid orange',
        width: '25%'
    }
  }));