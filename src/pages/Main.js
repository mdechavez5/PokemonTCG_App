import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import CardsPage from './CardsPage'
import CardPage from './CardPage'

function Main(props) {
    const [cards, setCards] = useState(null)

    const URL = 'https://api.pokemontcg.io/v2/cards?q=name:gardevoir&pageSize=5'

    const queryOptions = {
        q: 'name:charizard',
        page: 1,
        pageSize: 10,
        orderBy: 'name',
    }

    const getCards = () => {
        fetch(URL, {queryOptions})
        .then(response => response.json())
        .then(result => {
            setCards(result)
        })
    }

    useEffect(() => { 
        getCards() 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // console.log(cards.data)

    return(

        !cards ? <p>Loading...</p> :
        <main>
            <Routes>
                <Route path='/' element={<CardsPage cards={cards.data}/>}/>
                <Route path='/cards/:id' element={<CardPage/>}/>
            </Routes>
        </main>
    )
}

export default Main