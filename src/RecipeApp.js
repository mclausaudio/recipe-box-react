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
        id: 0,
         title: "Spaghetti",
         ingredients: ["noodles", "some water"],
         instructions: "Mix the ingredients.",
         img: "pasta.jpg"
        },{
          id: 1,
         title: "Noodle Soup",
         ingredients: ["noodles", "broth", "spices"],
         instructions: "Cook them together in a pot.",
         img: "noodle soup.jpg"
        }, {
          id: 2,
         title: "Pizza",
         ingredients: ["bread", "sauce", "cheese", "artichoke hearts", "olives", "sun dried tomatoes", "fresh basil"],
         instructions: "Pick up the phone and call your local pizzeria.  Be sure to tip the delivery driver.",
         img: "pizza.jpeg"
        }],
        nextRecipeId: 3,
        showForm: false
    }
    
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    
  }
  
  handleSave(recipe){
    this.setState((prevState, props)=>{
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    })
  }
  
  onDelete(id) {
    // filter through recipes array, use filter to return only recipes that do not have the same ID
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <NavBar onNewRecipe={()=> this.setState({showForm: true})}/>
        { showForm ? 
          <RecipeInput 
            onSave={this.handleSave}
            onClose={()=>this.setState({showForm: false})}
          /> : 
        null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
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