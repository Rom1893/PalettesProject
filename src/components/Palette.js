import React, { Component } from 'react'
import ColorBox from './ColorBox';
import NavBar from "./NavBar";
import "../Styles/Palette.css";

class Palette extends Component {

    state = {
        level: 500,
        format: "hex"
    }

    changeLevel = (level) => {
        this.setState({ level })
    }

    changeFormat = (value) => {
        this.setState({ format: value })
    }

    render() {

        const colorBoxes = this.props.palette.colors[this.state.level].map(m => (
            <ColorBox background={m[this.state.format]} name={m.name} key={m.id} />
        ))

        return (
            <div className='Palette'>
                <NavBar
                    level={this.state.level}
                    changeLevel={this.changeLevel}
                    changeFormat={this.changeFormat}
                />
                <div className='Palette-colors'>{colorBoxes}</div>
                <footer className='Palette-footer'>
                    {this.props.palette.paletteName}
                    <span className='emoji'>{this.props.palette.emoji}</span>
                </footer>

            </div>
        )
    }
}

export default Palette;
