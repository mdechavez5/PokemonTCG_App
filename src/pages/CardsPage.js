import React from 'react'
import Card from '../components/Card'

function CardsPage(props) {
    const cards = props.cards
    console.log('CardsPage cards: ',cards)


    function display(){

        const allCards = cards.map(card => {
            return(
                    <Card key={card.id} card={card}/>
            )
        })
    }

    return(

        // !cards ? null :
        <div className='cards-container'>
             {cards ? display() : <p>Loading</p>}
        </div>
    )
}

export default CardsPage