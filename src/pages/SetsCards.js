import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import CardsPage from './CardsPage'

function SetsCards(props) {
    const [result, setResult] = useState(null)
    const {id} = useParams()
    const queryOptions = {
        q: `set.id:${id}`,
        page: 1,
        pageSize: 40,
        orderBy: 'name',
    }
    
    const URL = `https://api.pokemontcg.io/v2/cards?q=set.id:${id}&pageSize=${queryOptions.pageSize}`
    
    function searchSet(event){
        fetch(URL)
        .then( (response) => response.json() )
        .then(result => {
            setResult(result.data)
        })
        .catch(function (error) {
              console.log(error)
        })
    }

    useEffect(() => {
        searchSet()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function displayCards() {
        return(
            <>
                {!result ? <h1>{id}</h1> : <h1>{result[0].set.name}</h1>}
                {!result ? <p>Loading</p> : <CardsPage cards={result}/>}
            </>
        )
    }

    return (
        <>
            {!id ? <div>SetsPage</div> : displayCards()}
        </>
    )
}

export default SetsCards