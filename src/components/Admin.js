import React, { Component } from 'react'
import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'
class Admin extends Component {
    render() { 
        const {recettes, addRecipe, updateRecipe, loadExemple, deleteRecipe } = this.props
        return (
            <div className="cards">
                <AddRecipe addRecipe={ addRecipe}/>
                {
                    Object.keys(recettes)
                    .map(key => <AdminForm
                        key={key}
                        id={key}
                        updateRecipe={updateRecipe}
                        deleteRecipe={deleteRecipe}
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