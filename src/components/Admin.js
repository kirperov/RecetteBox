import React, { Component } from 'react'
import AddRecipe from './AddRecipe'
 
class Admin extends Component {
    render() { 
        return (
            <div className="cards">
                <AddRecipe addRecipe={this.props.addRecipe}></AddRecipe>
            <footer>
                <button onClick={this.props.loadExemple}>Remplir</button>
            </footer>
            </div>
        )
    }
}

export default Admin