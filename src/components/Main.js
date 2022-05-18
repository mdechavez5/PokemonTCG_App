import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CardsPage from '../pages/CardsPage'
import CardPage from '../pages/CardPage'
import Search from './Search'
import NotFoundPage from '../pages/NotFoundPage'
import SetsPage from '../pages/SetsPage'

function Main(props) {

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

    function handleInput (event){
        // console.log(event.target.value)
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

    function searchQuery(event){
        event.preventDefault()
        const URL = `https://api.pokemontcg.io/v2/cards?q=${query.query.q}&pageSize=${query.query.pageSize}`
        fetch(URL)
        .then( (response) => response.json() )
        .then(result => {
            setQuery({
                search:result.data, searching:true
            })
            // console.log("result: ",result)
        })
        .catch(function (error) {
              console.log(error)
        })
    }

    // useEffect(() => {
    //     searchQuery()
    // }, [])

    return(
        <>
            <Search handleInput={handleInput} searchQuery={searchQuery}/>
            <main>
                <Routes>
                    <Route path='/' element={query.search ? <CardsPage cards={query.search}/> : <HomePage/> }/>
                    <Route path='/cards/:id' element={<CardPage/>}/>
                    <Route path='/sets' element={<SetsPage/>}>
                        {/* <Route path='/sets/:id' element={<SetsPage/>}/> */}
                        <Route path='/sets/:id' element={<CardsPage cards={query.search}/>}/>
                    </Route>
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
            </main>
        </>
    )
}

export default Main