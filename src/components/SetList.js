import React from 'react'
import {Link} from 'react-router-dom'

function SetList() {
    return (
        <section className='set-list column'>
            <Link to='/set/swsh9'>Brilliant Stars</Link>
            <Link to='/set/swsh8'>Fusion Strike</Link>
            <Link to='/set/swsh7'>Evolving Skies</Link>
        </section>
    )
}

export default SetList