import React from 'react'

function Tcgplayer(props) {

    console.log(props)

    function display() {
        return(
            <div>
                <a href={props.tcgplayer.url}>Tcgplayer Prices</a>
                <p>{props.tcgplayer.updatedAt}</p>
                <p>{props.tcgplayer.prices.holofoil.low}</p>
            </div>
        )
    }

    return (
        props ? display() : <h1>Loading...</h1>
    )
}

export default Tcgplayer