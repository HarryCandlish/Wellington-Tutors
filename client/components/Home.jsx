import React from 'react'

import Fiction from './Fiction'
import NonFiction from './NonFiction'
import About from './About'
import Profile from './Profile'


const Home = () => {
    return (
      <div>
        <div>
            <p className="title">Hairy Reads</p>
        </div>
        <div className = "header_page">
            <img className="godot" src="images/waitingForGodot.jpg" alt="Godot"/>
        </div>
      </div>
    )
}

export default Home