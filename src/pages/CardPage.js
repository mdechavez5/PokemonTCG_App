import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Tcgplayer from '../components/Tcgplayer'
import Cardmarket from '../components/Cardmarket'

function CardPage(props) {
    const [card, setCard] = useState(null)
    const {id} = useParams()
    // console.log(id)

    const URL = `https://api.pokemontcg.io/v2/cards/${id}`

    const getCard = () => {
        fetch(URL)
        .then(response => response.json())
        .then(result => {
            setCard(result.data)
            console.log("CARD API Called")
        })
    } 

    useEffect(() => {
        getCard()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // console.log(card)

    const display = () => {
        return (
            <div className='row'>
                <img className='show-pic' src={card.images.large} alt={card.name}/>
                <div className='card-details'>
                    <h1>{card.name}</h1>
                    <Tcgplayer tcgplayer={card.tcgplayer}/>
                    <Cardmarket cardmarket={card.cardmarket}/>
                </div>
            </div>
            )
    }

    return (
        !card ? <h1>Loading...</h1> : display()
    )
}

export default CardPage