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

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.handleAuth({ user })
            }
        })
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
          .then(this.handleAuth)
      }

      //Logout 
      logout = async () => {
          console.log("Deconnexion")
          await firebase.auth().signOut()
          this.setState({ uid: null})
      }

    render() { 
        const {recettes, addRecipe, updateRecipe, loadExemple, deleteRecipe } = this.props
        const logout = <button onClick={this.logout}>Déconnexion</button>
        //If user is not connected
        if(!this.state.uid) {
            return <Login authenticate={ this.authenticate }/>       
        } 

        if(this.state.uid !== this.state.chef) {
            return (
            <div>
                <p>Tu n'est pas le chef de cette boîte</p>
                {logout}
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
                {logout}
                <button onClick={loadExemple}>Remplir</button>
            </footer>
            </div>
        )
    }
}

export default Admin