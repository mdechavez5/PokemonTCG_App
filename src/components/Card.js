import React, {useState,useEffect} from 'react'

function Card() {
    const [card, setCard] = useState(null)
    const URL = 'https://api.pokemontcg.io/v2/cards/xy1-1'

    const getCard = () => {
        fetch(URL)
        .then(response => response.json())
        .then(result => {
            setCard(result.data)
        })
    } 

    useEffect(() => getCard(),[])

    console.log(card)

    const display = () => {
        return (
            <div className='card'>
                <h1>{card.name}</h1>
                <p>{card.id}</p>
                <img src={card.images.small} alt={card.name}/>
                <p></p>
            </div>
            )
    }

    return (
        !card ? <h1>Loading...</h1> : display()
    )
}

export default Card