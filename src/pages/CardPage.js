import React, {useState,useEffect} from 'react'
import Card from '../components/Card'

function CardPage() {
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
            <>
                <Card card={card}/>
            </>
            )
    }

    return (
        !card ? <h1>Loading...</h1> : display()
    )
}

export default CardPage