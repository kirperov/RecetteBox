import React, { Component } from 'react'
// CSS
import './App.css'
import recettes from './recettes'

import Header from './components/Header'
import Admin from './components/Admin'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }
loadExemple = () => this.setState({ recettes })

  render () {
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/> 
        <div className='cards'>
          <div className='card'>
            <h2>Une Carte</h2>
          </div>
        </div>
        <Admin 
          loadExemple={this.loadExemple}
          ></Admin>
      </div>
    )
  }
}

export default App
