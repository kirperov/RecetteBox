import React from 'react';

const Card = ({details}) => {
    const ingredients = details.ingredients
        .split(',')
        .map(item => <li key={item}>{item}</li>)
        const instructions = details.instructions
        .split('\n')
        .map(item => <li key={item}>{item}</li>)

    const requireImage = path => {
        try {
            return require(`../img/${path}`)
        } catch (err) {
            return require(`../img/default.jpeg`)
        }
    }
    return (
        <div className="card">
            <div className="image">
                <img src={requireImage(details.image)} alt={details.nom}></img>
            </div>
            <div className="recette">
                <h2>{details.nom}</h2>
                <ul className="list-ingredients">
                    {ingredients}
                </ul>
                <ol className="list-instructions">
                    {instructions}
                </ol>
            </div>
        </div>
    );
}
 
export default Card;