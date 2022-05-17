import React from 'react'
import Card from '../components/Card'

function CardsPage(props) {

    const cards = props.cards

    const allCards = cards.map(card => {
        return(
            <Card key={card.id} card={card}/>
        )
    })

    return(

        // !cards ? null :
        <div className='cards-container'>
             {cards ? allCards : <p>Loading CardsPage</p>}
        </div>
    )
}

export default CardsPage