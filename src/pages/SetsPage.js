import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import CardsPage from './CardsPage'

function SetsPage(props) {
    const {id} = useParams()
    console.log("set/:id ",id)

    const [set, setSet] = useState(id)
    console.log("set set",set)
    const [result, setResult] = useState(null)

    // setSet(id)

    function searchSet(event){
        setSet(id)
        const queryOptions = {
            q: `set.id:${set}`,
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
    }, [])

    function display() {
        return(
            <>
                {!result ? <p>Loading</p> : <CardsPage cards={result}/>}
            </>
        )
    }

    return (
        <>
            {!id ? <div>SetsPage</div> : display()}
        </>
    )
}

export default SetsPage