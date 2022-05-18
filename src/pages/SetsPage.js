import React from 'react'
import {useParams} from 'react-router-dom'

function SetsPage(props) {
    const {id} = useParams()
    console.log(id)

    function display() {
        return(
            <p>Display Cards</p>
        )
    }

    return (
        <>
            {!id ? <div>SetsPage</div> : display()}
        </>
    )
}

export default SetsPage