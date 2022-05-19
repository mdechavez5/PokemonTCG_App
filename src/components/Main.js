import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CardsPage from '../pages/CardsPage'
import CardPage from '../pages/CardPage'
import Search from './Search'
import NotFoundPage from '../pages/NotFoundPage'
import SetsCards from '../pages/SetsCards'

function Main(props) {

    // Set Default State
    const [query, setQuery] = useState({
        query: {
            q: `name:pikachu`,
            page: 1,
            pageSize: 40,
            orderBy: 'name'
        },
        search: null,
        searching: false,
    })

    // Handling Input from Searchbar
    function handleInput (event){
        setQuery((prevQuery) => ({
            ...prevQuery,
            query: {
                q: event.target.value,
                page: 1,
                pageSize: 40,
                orderBy: 'name'
            },
            searching: false,
        }))
    }

    // Handles When User Submits Query
    function searchQuery(event){
        event.preventDefault()
        const URL = `https://api.pokemontcg.io/v2/cards?q=${query.query.q}&pageSize=${query.query.pageSize}`
        fetch(URL)
        .then( (response) => response.json() )
        .then(result => {
            setQuery({
                ...query,
                search:result.data, 
                searching:true
            })
        })
        .catch(function (error) {
              console.log(error)
        })
    }

    return(
        <>
            <Search handleInput={handleInput} searchQuery={searchQuery}/>
            <main>
                <Routes>
                    <Route path='/' element={!query.search ? <HomePage/> : <CardsPage cards={query.search}/> }/>
                    <Route path='/cards/:id' element={<CardPage/>}/>
                    <Route path='/sets' element={<SetsCards/>}>
                        <Route path='/sets/:id' element={<SetsCards/>}/>
                    </Route>
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
            </main>
        </>
    )
}

export default Main