import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
    static defaultProps = {
        onClose() {},
        onSave() {}
    }
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
    }
    
    handleChange(e){
        //since handleChange will be used in multiple places, use []'s with the elements name.  
        //Set's it equal to the value of the item, so you don't have to hard code
        this.setState({[e.target.name]: e.target.value});
        
    }
    
    handleNewIngredient(e){
        const {ingredients} = this.state;
        this.setState({ingredients: [...ingredients, '']});
    }
    
    handleChangeIngredient(e){
        //refering to the ingredients 'name' in jsx
        //splitting that string, to only grab the number
        //calling it in Number() so it's treated as integer and not string
        const index = Number(e.target.name.split("-")[1]);
        const ingredients = this.state.ingredients.map((ing, i) => {
            //if .map's index i is equal to the index we are looking for, the index variable above, 
            //  we return e.target.value, the new value.
            //if not, we just return the ingredient untouched
            return i === index ? e.target.value : ing
        })
        this.setState({ingredients});
    }
    
    render() {
        const {title, instructions, img, ingredients} = this.state;
        let {onClose} = this.props;
        let inputs = ingredients.map((ingredient, i) => (
            <div className="recipe-form-line" key={`ingredient-${i}`}>
                <label>{i + 1}.
                    <input
                        type="text"
                        //need to identify which ingredient, or which string in the array, is being typed into.  
                        //Can do this using the name property below
                        name={`ingredients-${i}`}
                        value={ingredient}
                        size={45}
                        autoComplete="off"
                        placeholder="Ingredient"
                        onChange={this.handleChangeIngredient}
                    />
                </label>
            </div>
        ));
        
        return (
          <div className="recipe-form-container">
            <form className='recipe-form' onSubmit={()=>{}}>
              <button
                type="button"
                className="close-button"
                onClick={onClose}
              >
                X
              </button>
              <div className='recipe-form-line'>
                <label htmlFor='recipe-title-input'>Title</label>
                <input
                  id='recipe-title-input'
                  key='title'
                  name='title'
                  type='text'
                  value={title}
                  size={42}
                  autoComplete="off"
                  onChange={this.handleChange}/>
              </div>
              <label
                htmlFor='recipe-instructions-input'
                style={{marginTop: '5px'}}
              >
                Instructions
              </label>
              <textarea
                key='instructions'
                id='recipe-instructions-input'
                type='Instructions'
                name='instructions'
                rows='8'
                cols='50'
                autoComplete='off'
                value={instructions}
                onChange={this.handleChange}/>
              {inputs}
              <button
                type="button"
                onClick={this.handleNewIngredient}
                className="buttons"
              >
                +
              </button>
              <div className='recipe-form-line'>
                <label htmlFor='recipe-img-input'>Image Url</label>
                <input
                  id='recipe-img-input'
                  type='text'
                  placeholder=''
                  name='img'
                  value={img}
                  size={36}
                  autoComplete='off'
                  onChange={this.handleChange} />
              </div>
              <button
                type="submit"
                className="buttons"
                style={{alignSelf: 'flex-end', marginRight: 0}}
              >
                SAVE
              </button>
            </form>
          </div>   
            )
            
            
    }
}

export default RecipeInput;