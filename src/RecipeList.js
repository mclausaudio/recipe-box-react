import React, {Component} from 'react';
import Recipe from './Recipe'

import './RecipeList.css'

class RecipeList extends Component {
    // static defaultProps = {
    //     recipes: [{
    //      title: "Spaghetti",
    //      ingredients: ["noodles", "some water"],
    //      instructions: "Mix ingredients",
    //      img: "estudy4.jpg"
    //     },{
    //      title: "Noodle Soup",
    //      ingredients: ["noodles", "broth", "spices"],
    //      instructions: "Cook them up",
    //      img: "estudy4.jpg"
    //     }, {
    //      title: "Pizza",
    //      ingredients: ["bread", "sauce", "cheese", "artichoke hearts", "olives", "sun dried tomatoes", "fresh basil"],
    //      instructions: "Mix ingredients",
    //      img: "estudy4.jpg"
    //     }]
    // }
    render() {
        return (
            <div className="recipe-list">
                {this.props.recipes.map((r, i) => (
                <Recipe 
                    key={r.id} {...r}
                    //can use {...r} to populate the rest of the props instead of the commented out code
                    // title={r.title} 
                    // ingredients={r.ingredients} 
                    // instructions={r.instructions} 
                    // img={r.img}
                />
                ))}
            </div>
        )
    }
}

export default RecipeList;
      
      