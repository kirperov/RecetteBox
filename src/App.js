import React, { Component } from 'react'
// CSS
import './App.css'
import recettes from './recettes'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
// Firebase 
import base from './base'
class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  //Synchronise Database firebase
  componentDidMount() {
      this.ref =  base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  //End synchronisation with base firebase when change user
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  //Function to add recipe
  addRecipe = recette => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({recettes})
  }

  updateRecipe = (key, newRecipe) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecipe
    this.setState({recettes})
  }

  //Add Exemple recipes
loadExemple = () => this.setState({ recettes })
  render () {
    const cards = Object.keys(this.state.recettes)
      .map(key => <Card key={key} details={this.state.recettes[key]}/>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/> 
        <div className='cards'>
          { cards }
        </div>
        <Admin
          recettes={this.state.recettes}
          addRecipe={this.addRecipe}
          updateRecipe={this.updateRecipe}
          loadExemple={this.loadExemple}
          ></Admin>
      </div>
    )
  }
}

export default App
