import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render () {
        return (
            <div className="nav-bar">
                <h3 className="nav-bar-logo">Recipe Box</h3>
                <div className="nav-bar-right">
                    <a href="">Home</a>
                    <a href="">New Recipe</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </div>    
        )
    }
}

export default NavBar;