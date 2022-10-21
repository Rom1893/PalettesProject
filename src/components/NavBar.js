import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Slider, { Range } from 'rc-slider';
import "rc-slider/assets/index.css"
import "../Styles/NavBar.css"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

class NavBar extends Component {

    state = {
        format: "hex",
        open: false
    }

    changeFormat = (e) => {
        this.setState({ format: e.target.value, open: true })
        this.props.changeFormat(e.target.value)
    }

    closeSnackbar = () => {
        this.setState({
            open: false
        })
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
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id='message-id'>Format Changed to {this.state.format.toUpperCase()}</span>}
                    ContentProps={{
                        "aria-describeby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} 
                        color="inherit"
                        key="close"
                        aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}

                
                />
            </header>
        )
    }
}

export default NavBar;
