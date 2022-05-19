import React from 'react'

function HomePage(props) {
    return (
        <div>
            <h1>Welcome</h1>
            <h2>Search for Pokemon Cards by name, set, type, etc.</h2>
            <p>Must search with a prefix: </p>
            <ul>
                <li>name:-     (i.e. name:charizard)</li>
                <li>set.id:-     (i.e. set.id:swsh9)</li>
                <li>types:-     (i.e. set.id:swsh9)</li>
            </ul>
        </div>
    )
}

export default HomePage