import React from 'react'

function HomePage(props) {
    return (
        <div>
            <h1>Welcome</h1>
            <h2>Search for Pokemon Cards by name, set, type, etc.</h2>
            <p>When searching must search with a prefix: </p>
            <ul>
                <li>name:-</li>
                <li>set.id:-</li>
                <li>types:-</li>
            </ul>
        </div>
    )
}

export default HomePage