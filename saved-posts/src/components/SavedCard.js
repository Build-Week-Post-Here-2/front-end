import React from 'react'

const SavedCard = (props) => {
    return(
        <div>
            <h2>Post Name {props.name}</h2>
            <h3>Post Content {props.content}</h3>
        </div>
    );
}

export default SavedCard;