import React from 'react'

function Cardmarket(props) {

    function display() {
        return(
            <div className='cardmarket-component'>
                <a href={props.cardmarket.url}>Cardmarket Prices</a>
                <p>Updated at {props.cardmarket.updatedAt}</p>
                <div className='cardmarket-table column'>
                    <div className='row'>
                        <p>Average Sell Price: </p>
                        <p>${props.cardmarket.prices.averageSellPrice}</p>
                    </div>
                    <div className='row'>
                        <p>Low Price: </p>
                        <p>${props.cardmarket.prices.lowPrice}</p>
                    </div>
                    <div className='row'>
                        <p>Trend Price: </p>
                        <p>${props.cardmarket.prices.trendPrice}</p>
                    </div>
                    <div className='row'>
                        <p>Average 1: </p>
                        <p>${props.cardmarket.prices.avg1}</p>
                    </div>
                    <div className='row'>
                        <p>Average 7: </p>
                        <p>${props.cardmarket.prices.avg7}</p>
                    </div>
                    <div className='row'>
                        <p>Average 30: </p>
                        <p>${props.cardmarket.prices.avg30}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        props ? display() : <h1>Loading...</h1>
    )
}

export default Cardmarket