import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Fiction from './Fiction'
import NonFiction from './NonFiction'

  const App = () => {
    return (
      <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/' component={Nav}/>
            <Route path='/Fiction' component={Fiction}/>
            <Route path='/NonFiction' component={NonFiction}/>
          </div>
      </Router>
    )
  } 



export default App

