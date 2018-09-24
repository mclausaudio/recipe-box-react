import React, { Component } from 'react';
import RecipeList from './RecipeList';
import NavBar from './NavBar'
import RecipeInput from './RecipeInput';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [{
        id: 1,
         title: "Spaghetti",
         ingredients: ["noodles", "some water"],
         instructions: "Mix ingredients",
         img: "estudy4.jpg"
        },{
          id: 2,
         title: "Noodle Soup",
         ingredients: ["noodles", "broth", "spices"],
         instructions: "Cook them up",
         img: "estudy4.jpg"
        }, {
          id: 3,
         title: "Pizza",
         ingredients: ["bread", "sauce", "cheese", "artichoke hearts", "olives", "sun dried tomatoes", "fresh basil"],
         instructions: "Mix ingredients",
         img: "estudy4.jpg"
        }],
        nextRecipeId: 3
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeInput />
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;

      
    // <Recipe 
    //   title='Pasta' 
    //   ingredients={['flour', 'water']}
    //   instructions = {'Mix together'}
    //   img='estudy4.jpg'
    //   />