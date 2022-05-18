import React from 'react'
import {Link} from 'react-router-dom'

function SetList() {
    return (
        <section className='set-list column'>
            <Link to='/sets'>Sets</Link>
            <Link to='/sets/swsh9'>Brilliant Stars</Link>
            <Link to='/sets/swsh8'>Fusion Strike</Link>
            <Link to='/sets/swsh7'>Evolving Skies</Link>
        </section>
    )
}

export default SetList