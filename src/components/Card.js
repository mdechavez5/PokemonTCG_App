import React from 'react'

function Card(props) {
    const display = () => {
        return (
            <div className='card'>
                <h1>{props.card.name}</h1>
                <p>{props.card.id}</p>
                <img src={props.card.images.small} alt={props.card.name}/>
                <p></p>
            </div>
            )
    }

    return (
        !props.card ? <h1>Loading...</h1> : display()
    )
}

export default Card