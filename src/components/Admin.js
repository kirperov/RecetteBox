import React, { Component } from 'react'
import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'
import Login from './Login'

//imports for authentification
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'


class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    handleAuth =  async authData => {
        console.log(authData)
        const box = await base.fetch(this.props.pseudo, { context: this })
        if (!box.chef) {
          await base.post(`${this.props.pseudo}/chef`, {
            data: authData.user.uid
          })
        }
        
        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
      }
    
      authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
          .auth()
          .signInWithPopup(authProvider)
          .then( this.handleAuth)
      }

    render() { 
        const {recettes, addRecipe, updateRecipe, loadExemple, deleteRecipe } = this.props
        //If user is not connected
        if(!this.state.uid) {
            return <Login authenticate={ this.authenticate }/>       
        } 

        if(this.state.uid !== this.state.chef) {
            return (
            <div>
                <p>Tu n'est pas le chef de cette boîte</p>
            </div>
            )
        }
        return (
            <div className="cards">
                <AddRecipe addRecipe={addRecipe}/>
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