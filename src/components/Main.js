import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import CardsPage from '../pages/CardsPage'
import CardPage from '../pages/CardPage'
import Search from './Search'

function Main(props) {

    const [state, setState] = useState({
        q: 'set.id:swsh9',
        search: null,
        searching: false,
    })

    function handleInput (event){
        // console.log(event.target.value)
        setState((prevState) => ({
            ...prevState,
            q: event.target.value,
            searching: false,
        }))
    }

    function searchQuery(event){
        event.preventDefault()
        // console.log(state.q)
        const queryOptions = {
            q: `${state.q}`,
            page: 1,
            pageSize: 10,
            orderBy: 'name',
        }

        // console.log("queryOptions.q: ",queryOptions.q)

        const URL = `https://api.pokemontcg.io/v2/cards?q=${queryOptions.q}&pageSize=${queryOptions.pageSize}`
        fetch(URL)
        .then( (response) => response.json() )
        .then(result => {
            setState({search:result.data, searching:true})
            // console.log("result: ",result)
        })
        // const URL = `https://api.pokemontcg.io/v2/cards`
        // axios.get(URL,{params})
        // .then( (response) => {
        //     console.log(response) 
        //     setState({search: response.data.data, searching:true})
        // })
        .catch(function (error) {
              console.log(error)
        })
    }

    return(
        <>
            <Search handleInput={handleInput} searchQuery={searchQuery}/>
            <main>
                <Routes>
                    <Route path='/' element={state.search ? <CardsPage cards={state.search}/> : <p>Loading</p>  }/>
                    <Route path='/?query=:query' element={<CardPage cards={state.search}/>}/>
                    <Route path='/cards/:id' element={<CardPage/>}/>
                </Routes>
            </main>
        </>
    )
}

export default Main