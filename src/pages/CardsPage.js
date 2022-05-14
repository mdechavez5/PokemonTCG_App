import React from 'react'
import Card from '../components/Card'
import {Link} from 'react-router-dom'

function CardsPage(props) {



    const cards = props.cards
    console.log('cards: ',cards)

    const allCards = cards.map(card => {
        return(
            <Link key={card.id} to={`/cards/${card.id}`}>
                <Card card={card}/>
            </Link>
        )
    })

    return(
        <div className='cards-container'>
            {allCards}
        </div>
    )
}

export default CardsPage