import React, { Component } from 'react'
import ColorBox from './ColorBox';
import NavBar from "./NavBar";
import "../Styles/Palette.css";
import PaletteFooter from './PaletteFooter';

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
            <ColorBox 
            background={m[this.state.format]} 
            name={m.name} 
            key={m.id} 
            id={m.id} 
            paletteId={this.props.palette.id}
            />
        ))

        return (
            <div className='Palette'>
                <NavBar
                    level={this.state.level}
                    changeLevel={this.changeLevel}
                    changeFormat={this.changeFormat}
                    showSlider
                />
                <div className='Palette-colors'>{colorBoxes}</div>
                <PaletteFooter 
                paletteName={this.props.palette.paletteName}
                emoji={this.props.palette.emoji}
                />
            </div>
        )
    }
}

export default Palette;
