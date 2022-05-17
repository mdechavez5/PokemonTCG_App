import React from 'react'

function Tcgplayer(props) {

    const keyValue = Object.entries(props.tcgplayer.prices)
    // console.log(keyValue)
    const prices = keyValue.map((price) => {
        return(
            <div key={price[0]} className='tcg-price'>
                <p>{price[0]}</p>
                <div className='tcgplayer-table row'>
                    <div>
                        <p>Low</p>
                        <p>${price[1].low}</p>
                    </div>
                    <div>
                        <p>Mid</p>
                        <p>${price[1].mid}</p>
                    </div>
                    <div>
                        <p>High</p>
                        <p>${price[1].high}</p>
                    </div>
                    <div>
                        <p>Market</p>
                        <p>${price[1].market}</p>
                    </div>
                </div>
            </div>
        )
    })

    // console.log(props)

    function display() {
        return(
            <div className='tcgplayer-component'>
                <a href={props.tcgplayer.url}>Tcgplayer Prices</a>
                <p>{props.tcgplayer.updatedAt}</p>
                {prices}
            </div>
        )
    }

    return (
        props ? display() : <h1>Loading...</h1>
    )
}

export default Tcgplayer