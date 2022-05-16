import React, {useState} from 'react'
import axios from 'axios'
import CardsPage from '../pages/CardsPage'

function Search(props) {
    const [state, setState] = useState({
        query: '',
        search: null,
        searching: false,
    })

    console.log(state.search)

    function handleInput (event){
        console.log(event.target.value)
        setState((prevState) => ({
            ...prevState,
            query: event.target.value,
            searching: false,
        }))
    }

    function searchQuery(event){
        event.preventDefault()

        const queryOptions = {
            q: `name:${state.query}`,
            page: 1,
            pageSize: 20,
            orderBy: 'name',
        }

        console.log("queryOptions.q: ",queryOptions.q)

        const URL = `https://api.pokemontcg.io/v2/cards?q=${queryOptions.q}&pageSize=${queryOptions.pageSize}`
        fetch(URL)
        .then(function (response) {
            console.log("response: ",response.data)
            setState((prevState) => ({
                ...prevState,
                searching: true,
                search: response.data
            }))
        })
        .catch(function (error) {
              console.log(error)
        })
    }
    return (
    <div>
        <form onSubmit={searchQuery}>
            <input className="search-box" name="query" onInput={handleInput}/>
        </form>
        {/* {state.searching ? <CardsPage cards={state.search}/> : null} */}
    </div>
    )
}

export default Search