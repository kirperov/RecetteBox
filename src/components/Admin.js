import React, { Component } from 'react'
import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'
class Admin extends Component {
    render() { 
        const {recettes, addRecipe, updateRecipe, loadExemple } = this.props
        return (
            <div className="cards">
                <AddRecipe addRecipe={ addRecipe}/>
                {
                    Object.keys(recettes)
                    .map(key => <AdminForm
                        key={key}
                        id={key}
                        updateRecipe={updateRecipe}
                        recettes={recettes}
                    />)
                }
            <footer>
                <button onClick={loadExemple}>Remplir</button>
            </footer>
            </div>
        )
    }
}

export default Admin