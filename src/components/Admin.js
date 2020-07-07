import React, { Component } from 'react'
 
class Admin extends Component {
    render() { 
        return (
            <footer>
                <button onClick={this.props.loadExemple}>Remplir</button>
            </footer>
        )
    }
}

export default Admin