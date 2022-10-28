import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import NavBar from './NavBar'
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

class SingleColorPalette extends Component{

    state ={
        format: "hex"
    }

    gatherShades = (palette, colorToFilterBy) => {
        let shades = [];
        let allColors = palette.colors;

    //Iterate inside the same object (for let in). [key] returns a string, thats why you dont use Allcolors.key
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        console.log(shades.slice(1))
        return shades.slice(1)
        
    }

    _shades = this.gatherShades(this.props.palette, this.props.colorId);

    changeFormat = (value) => {
        this.setState({ format: value })
    }

    render() {

        const colorBoxes = this._shades.map((color) => (
        <ColorBox 
        key={color.name} 
        name={color.name} 
        background={color[this.state.format]}
        showingFullPalette={false}
        />
        ))

        return(
            <div className='SingleColorPalette Palette'>
                <NavBar changeFormat={this.changeFormat} showSlider={false}/>
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className='go-back ColorBox'>
                        <Link to={`/palette/${this.props.palette.id}`} className="back-button">Go Back</Link>
                    </div>
                </div>
                <PaletteFooter 
                paletteName={this.props.palette.paletteName}
                emoji={this.props.palette.emoji}
                />
            </div>
        )
    }
}

export default SingleColorPalette;