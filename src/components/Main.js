import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import CardsPage from '../pages/CardsPage'
import CardPage from '../pages/CardPage'
import Search from './Search'

function Main(props) {
    // const [cards, setCards] = useState(null)
    // const [cards, setCards] = useState(props.cards)
    const cards = props.cards
    // console.log(cards)

    // const queryOptions = {
    //     q: 'set.id:swsh8',
    //     // q: 'set.name:generations subtypes:mega',
    //     page: '1',
    //     pageSize: '20',
    //     orderBy: 'name',
    // }
    
    // const URL = `https://api.pokemontcg.io/v2/cards?q=${queryOptions.q}&pageSize=${queryOptions.pageSize}`

    // const getCards = () => {
    //     fetch(URL)
    //     .then(response => response.json())
    //     .then(result => {
    //         setCards(result)
    //         console.log("API Called")
    //     })
    // }

    // useEffect(() => { 
    //     getCards() 
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[])

    // console.log(cards.data)

    return(

        !cards ? <p>Loading...</p> :
        <main>
            <Routes>
                {/* <Route path='/' element={<CardsPage cards={cards.data}/>}/> */}
                <Route path='/' element={<CardsPage cards={cards}/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/cards/:id' element={<CardPage/>}/>
            </Routes>
        </main>
    )
}

export default Main