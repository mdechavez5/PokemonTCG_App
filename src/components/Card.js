import React from 'react'
import {Link} from 'react-router-dom'

function Card(props) {
    const display = () => {
        return (
            <Link className='card' to={`/cards/${props.card.id}`}>
                <h1>{props.card.name} (<span>{props.card.id}</span>)</h1>
                <img src={props.card.images.small} alt={props.card.name}/>
            </Link>
        )
    }

    return (
        !props.card ? <h1>Loading...</h1> : display()
    )
}

export default Card