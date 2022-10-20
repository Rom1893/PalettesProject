import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Slider, { Range } from 'rc-slider';
import "rc-slider/assets/index.css"
import "../Styles/NavBar.css"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

class NavBar extends Component {

    state={
        format: "hex"
    }

    changeFormat = (e) => {
        this.setState({format: e.target.value})
        this.props.changeFormat(e.target.value)
    }

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
                <div className='select-container'>
                    <Select value={this.state.format} onChange={this.changeFormat}>
                        <MenuItem value="hex">Hex - #ffffff</MenuItem>
                        <MenuItem value="rgb">Rgb - (255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">Rgba - (255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default NavBar;
