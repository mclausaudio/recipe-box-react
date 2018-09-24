import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe'

import './RecipeList.css'

class RecipeList extends Component {
    static defaultProps = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDelete: PropTypes.func.isRequired
    }
    render() {
        const {onDelete} = this.props;
        const recipes = this.props.recipes.map((r, i) => (
                <Recipe 
                    key={r.id} {...r}
                    //can use {...r} to populate the rest of the props instead of the commented out code
                    // title={r.title} 
                    // ingredients={r.ingredients} 
                    // instructions={r.instructions} 
                    // img={r.img}
                    onDelete={onDelete}
                />
                ))
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;
      
      