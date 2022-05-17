import React from 'react'
import {useParams} from 'react-router-dom'

function SearchPage(props) {
    const {id} = useParams()
    console.log(id)

    return (
        <div>SearchPage</div>
    )
}

export default SearchPage