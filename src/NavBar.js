import React, { Component } from 'react';
import './NavBar.css'
import PropTypes from 'prop-types';


class NavBar extends Component {
    static defaultProps = {
        onNewRecipe(){}
    }
    
    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    
    render () {
        return (
            <div className="nav-bar">
                <h3 className="nav-bar-logo">Recipe Box</h3>
                <ul className="nav-bar-right">
                    <li className='nav-link'onClick={this.props.onNewRecipe}>New Recipe</li>
                    <li className=''>Created by <a className="nav-a-tag" href="http://www.michaelclaus.io" target="_blank" rel="noopener noreferrer">Michael Claus</a></li>
                </ul>
            </div>    
        )
    }
}

export default NavBar;