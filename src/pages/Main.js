import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import CardsPage from './CardsPage'
import CardPage from './CardPage'

function Main(props) {
    const [cards, setCards] = useState(null)

    const queryOptions = {
        q: 'name:charizard',
        // q: 'set.name:generations subtypes:mega',
        page: '1',
        pageSize: '10',
        orderBy: 'name',
    }
    
    const URL = `https://api.pokemontcg.io/v2/cards?q=${queryOptions.q}&pageSize=10`

    const getCards = () => {
        fetch(URL)
        .then(response => response.json())
        .then(result => {
            setCards(result)
            console.log("API Called")
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