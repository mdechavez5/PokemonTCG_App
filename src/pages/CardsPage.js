import React from 'react'
import Card from '../components/Card'

function CardsPage(props) {
    const cards = props.cards
    console.log('cards: ',cards)

    const allCards = cards.map(card => {
        return(
            <Card card={card}/>
        )
    })

    return(
        <div>
            {allCards}
        </div>
    )
}

export default CardsPage