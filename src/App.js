import React, { Component } from 'react'
import ReactLenis from 'lenis/react'
import Table from './Table'
import Homepage from './components/05-pages/homepage'

class App extends Component {
    render() {
      return (
        <ReactLenis root>
          <Homepage />
        </ReactLenis>
      )
    }
}

export default App