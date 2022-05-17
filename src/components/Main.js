import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardsPage from '../pages/CardsPage'
import CardPage from '../pages/CardPage'
import Search from './Search'

function Main(props) {
    // const {queryParams} = useParams()
    // console.log(queryParams)

    const [query, setQuery] = useState({
        q: 'name:charmander',
        search: null,
        searching: false,
    })

    function handleInput (event){
        // console.log(event.target.value)
        setQuery((prevQuery) => ({
            ...prevQuery,
            q: event.target.value,
            searching: false,
        }))
    }

    function searchQuery(event){
        event.preventDefault()
        const queryOptions = {
            q: `${query.q}`,
            page: 1,
            pageSize: 10,
            orderBy: 'name',
        }

        // console.log("queryOptions.q: ",JSON.stringify(queryOptions))

        const URL = `https://api.pokemontcg.io/v2/cards?q=${queryOptions.q}&pageSize=${queryOptions.pageSize}`
        fetch(URL)
        .then( (response) => response.json() )
        .then(result => {
            setQuery({search:result.data, searching:true})
            console.log("result: ",result)
        })

        // const URL = `https://api.pokemontcg.io/v2/cards`
        // axios.get(URL,{queryOptions})
        // .then( (response) => {
        //     console.log(response.data.data) 
        //     setQuery({search: response.data.data, searching:true})
        // })
        // .catch(function (error) {
        //       console.log(error)
        // })
    }

    // useEffect(() => {
    //     searchQuery()
    // }, [])

    return(
        <>
            <Search handleInput={handleInput} searchQuery={searchQuery}/>
            <main>
                <Routes>
                    <Route path='/' element={query.search ? <CardsPage cards={query.search}/> : <h1>Home Page</h1>  }/>
                    <Route path='/cards/:id' element={<CardPage/>}/>
                    {/* <Route path='/?q=:query' element={query.search ? <CardsPage cards={query.search}/> : <p>Loading</p> }/> */}
                    {/* <Route path='/sets/:id' element={<SetPage/>}/> */}
                </Routes>
            </main>
        </>
    )
}

export default Main