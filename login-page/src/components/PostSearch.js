import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utlis/axiosWithAuth'

const initialValue = {
    data = [
        {
            id: 1,
            post_title: "money",
            post_content: "make more money",
            user_id: 1
        },
        {
            id: 2,
            post_title: "climate change",
            post_content: "what do you know about climate change",
            user_id: 1
        },
        {
            id: 4,
            post_title: "coding",
            post_content: "keep coding",
            user_id: 2
        }
    ]
}

const SearchPost = () => {
    const [search, setSearch] = useState(initialValue);

    useEffect(() => {
        axiosWithAuth()
        .get('/users/posts')
        .then(res => {
            setSearch()
        })
        .catch(err => {

        })
    })


    return (
        <form>
                <input
                name="search"
                type="text"
                className="form-control"
                placeholder="Search Reccomendations"
                value={}
                onChange={handleChange}
                />
            </form>
    )

}

export default SearchPost