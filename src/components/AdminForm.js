import React from 'react';

const AdminForm = () => {
    return(
        <div className="card">
            <form className="admin-form">
                <input type="text" name="nom" placeholder="Nom de la recette"/>
                <input type="text" name="image" placeholder="Adresse de l'image"/>
                <textarea name="ingredients" row="3" placeholder="Liste des ingeédients"></textarea>
                <textarea name="instructions" row="3" placeholder="Liste des instructions"></textarea>
            </form>
            <button>Supprimer</button>
        </div>
    )
}

export default AdminForm