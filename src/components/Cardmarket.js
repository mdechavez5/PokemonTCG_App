import React from 'react'

function Cardmarket(props) {

    console.log(props)

    function display() {
        return(
            <div>
                <a href={props.cardmarket.url}>Cardmarket Prices</a>
                <p>{props.cardmarket.updatedAt}</p>
                <p>{props.cardmarket.prices.averageSellPrice}</p>
            </div>
        )
    }

    return (
        props ? display() : <h1>Loading...</h1>
    )
}

export default Cardmarket