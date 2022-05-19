import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import CardsPage from './CardsPage'

function SetsCards(props) {
    const {id} = useParams()
    // console.log("set/:id ",id)
    const [result, setResult] = useState(null)

    function searchSet(event){
        const queryOptions = {
            q: `set.id:${id}`,
            page: 1,
            pageSize: 40,
            orderBy: 'name',
        }

        const URL = `https://api.pokemontcg.io/v2/cards?q=${queryOptions.q}&pageSize=${queryOptions.pageSize}`
        fetch(URL)
        .then( (response) => response.json() )
        .then(result => {
            // console.log(result.data)
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

    // console.log(result)

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