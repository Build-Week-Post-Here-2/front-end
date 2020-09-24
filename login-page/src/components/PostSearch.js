import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utlis/axiosWithAuth'

const initialValue = [
        {
            post_title: 'tesla stock'
        }
    ]

const SearchPost = () => {
    const [search, setSearch] = useState(initialValue);



    useEffect(() => {
        axiosWithAuth()
        .get(`/users/${id}/postSearch`)
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
                placeholder="Search Reccommendations"
                value={}
                onChange={handleChange}
                />
            </form>
    )

}

export default SearchPost