import React, {useState} from 'react'
import Main from './Main'
// import axios from 'axios'
// import CardsPage from '../pages/CardsPage'

function Search(props) {
    // const [state, setState] = useState({
    //     query: '',
    //     search: null,
    //     searching: false,
    // })

    // function handleInput (event){
    //     // console.log(event.target.value)
    //     setState((prevState) => ({
    //         ...prevState,
    //         query: event.target.value,
    //         searching: false,
    //     }))
    // }

    // function searchQuery(event){
    //     event.preventDefault()
    //     console.log(state.query)
    //     const queryOptions = {
    //         q: `${state.query}`,
    //         page: 1,
    //         pageSize: 250,
    //         orderBy: 'name',
    //     }

    //     // console.log("queryOptions.q: ",queryOptions.q)

    //     const URL = `https://api.pokemontcg.io/v2/cards?q=${queryOptions.q}&pageSize=${queryOptions.pageSize}`
    //     fetch(URL)
    //     .then( (response) => response.json() )
    //     .then(result => {
    //         setState({search:result.data, searching:true})
    //         // console.log("result: ",result)
    //     })
    //     // const URL = `https://api.pokemontcg.io/v2/cards`
    //     // axios.get(URL,{params})
    //     // .then( (response) => {
    //     //     console.log(response) 
    //     //     setState({search: response.data.data, searching:true})
    //     // })
    //     .catch(function (error) {
    //           console.log(error)
    //     })
    // }
    return (
    <div>
        <form className='search-form' onSubmit={props.searchQuery}>
            <input className="search-box" name="query" onInput={props.handleInput}/>
        </form>
        {/* {state.searching ? <CardsPage cards={state.search}/> : null} */}
        {/* {state.searching ? <Main cards={state.search}/> : null} */}
    </div>
    )
}

export default Search