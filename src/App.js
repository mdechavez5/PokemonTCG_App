import './App.css'
import React, {useState} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [state, setState] = useState({
    query: 'name:charizard',
    search: null,
    searching: false,
})

function handleInput (event){
    // console.log(event.target.value)
    setState((prevState) => ({
        ...prevState,
        query: event.target.value,
        searching: false,
    }))
}

function searchQuery(event){
    event.preventDefault()
    console.log(state.query)
    const queryOptions = {
        q: `${state.query}`,
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
        console.log("result: ",result)
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


  return (
    <div className="App">
      <Header/>
      <Search searchQuery={searchQuery} handleInput={handleInput}/>
      {/* <Main/> */}
      <Main cards={state.search}/>
      {/* {state.searching ? <Main cards={state.search}/> : null} */}
      <Footer/>
    </div>
  )
}

export default App
