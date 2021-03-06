import React from 'react';
// For the deleteRecipe method I must use the arrow function because I am passing a parameter to launch it when clicked
// and not the chaegement of the page
const AdminForm = ({
  //Means that I want use the id with name "key" because ":" means that I want use name "key"
  id: key,
  updateRecipe,
  deleteRecipe,
  recettes
}) => {
        const recette = recettes[key]

        const handleChange = (event, key) => {
            const {name, value} = event.target
            const recette = recettes[key]
            recette[name] = value
            updateRecipe(key, recette)
        }
    return(
        <div className="card">
            <form className="admin-form">
                <input value={recette.nom} onChange={e => handleChange(e, key)} type="text" name="nom" placeholder="Nom de la recette"/>
                <input value={recette.image} onChange={e => handleChange(e, key)} type="text" name="image" placeholder="Adresse de l'image"/>
                <textarea value={recette.ingredients} onChange={e => handleChange(e, key)} name="ingredients" row="3" placeholder="Liste des ingeédients"></textarea>
                <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name="instructions" row="3" placeholder="Liste des instructions"></textarea>
            </form>
            <button onClick={() => deleteRecipe(key)}>Supprimer</button>
        </div>
    )
}

export default AdminForm