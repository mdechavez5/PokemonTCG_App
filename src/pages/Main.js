import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import CardPage from './CardPage'

function Main(props) {
    return(
        <main>
        <Routes>
            <Route path='/' element={<CardPage/>}/>
            <Route path='/cards/:id' element={<CardPage/>}/>
        </Routes>
    </main>
    )
}

export default Main