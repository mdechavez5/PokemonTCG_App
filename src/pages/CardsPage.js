import React from 'react'
import Card from '../components/Card'

function CardsPage(props) {
    const cards = props.cards
    // console.log('cards: ',cards)

    const allCards = cards.map(card => {
        return(
                <Card key={card.id} card={card}/>
        )
    })

    return(
        <>
            {cards[0].set.name?<h1>{cards[0].set.name}</h1> : <p></p>}
            <div className='cards-container'>
                {allCards}
            </div>
        </>
    )
}

export default CardsPage