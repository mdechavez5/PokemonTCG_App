import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
  return (
    <nav className='row'>
        <Link to='/'>
            <div>PokemonTCG App</div>
        </Link>
    </nav>
  )
}

export default Header