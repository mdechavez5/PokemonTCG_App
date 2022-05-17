import React, {useState,useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Tcgplayer from '../components/Tcgplayer'
import Cardmarket from '../components/Cardmarket'

function CardPage(props) {
    const [card, setCard] = useState(null)
    const {id} = useParams()
    console.log("useParams id: ",id) 

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
            <div className='show-window row'>
                <div className='card-window'>
                    <Link to='/'>
                        <div className='close-button'>X</div>
                    </Link>
                    <img className='show-pic' src={card.images.large} alt={card.name}/>
                </div>
                <div className='card-details'>
                    <h1>{card.name}</h1>
                    <h3>{card.id}</h3>
                    {card.tcgplayer ? <Tcgplayer tcgplayer={card.tcgplayer}/> : <p>No tcgplayer info available.</p> }
                    {card.cardmarket ? <Cardmarket cardmarket={card.cardmarket}/> : <p>No cardmarket info available.</p> }
                </div>
            </div>
        )
    }

    return (
        !card ? <h1>Loading...</h1> : display()
    )
}

export default CardPage