import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
  return (
    <nav className='nav row'>
        <Link to='/'>
            <div>PokemonTCG App</div>
        </Link>
        <Link to='/signin'>
            <div>Sign In</div>
        </Link>
        <Link to='/register'>
            <div>Register</div>
        </Link>
    </nav>
  )
}

export default Header