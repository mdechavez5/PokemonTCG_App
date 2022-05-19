import React from 'react'
import Card from '../components/Card'

function CardsPage(props) {

    // Takes in array of Card Info as props
    const cards = props.cards

    // Goes through each card in the array to render a card component
    const allCards = cards.map(card => {
        return(
            <Card key={card.id} card={card}/>
        )
    })

    return(
        <div className='cards-container'>
             {cards ? allCards : <p>Loading CardsPage</p>}
        </div>
    )
}

export default CardsPage