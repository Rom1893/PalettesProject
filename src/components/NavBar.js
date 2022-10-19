import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Slider, { Range } from 'rc-slider';
import "rc-slider/assets/index.css"
import "../Styles/NavBar.css"

class NavBar extends Component {


    render() {

        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='#'>ColorPicker</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {this.props.level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={this.props.level}
                            min={100} max={900}
                            step={100}
                            onAfterChange={this.props.changeLevel} />
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;
