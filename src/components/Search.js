import React from 'react'

function Search(props) {
    return (
    <div>
        <form className='search-form' onSubmit={props.searchQuery}>
            <input className="search-box" name="query" onInput={props.handleInput}/>
        </form>
    </div>
    )
}

export default Search