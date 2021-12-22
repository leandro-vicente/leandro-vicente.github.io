import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home/index.js'
import YouTubeList from './components/YouTubeList/index.js'
class App extends Component {
  constructor(props){
    super(props)
    library.add(fab)
  }

  render() {
    return (
      <div id='content-wrap'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/lista' render={YouTubeList} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
