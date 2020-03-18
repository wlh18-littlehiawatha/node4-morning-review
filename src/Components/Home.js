import React from 'react'
import axios from 'axios'

const logout = (props) => {
    axios.post('/auth/logout')
        .then(() => {
            props.history.push('/')
        })
}

function Home(props){
    return(
        <div>
            <h1>Congrats! You logged in!</h1>
            <button onClick={() => logout(props)}>Logout</button>
        </div>
    )
}

export default Home