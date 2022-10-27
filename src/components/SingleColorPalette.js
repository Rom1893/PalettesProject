import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import "../Styles/Palette.css"

class SingleColorPalette extends Component{

    gatherShades = (palette, colorToFilterBy) => {
        let shades = [];
        let allColors = palette.colors;

        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        console.log(shades.slice(1))
        return shades.slice(1)
        
    }

    _shades = this.gatherShades(this.props.palette, this.props.colorId);

    render() {

        const colorBoxes = this._shades.map((color) => (
        <ColorBox key={color.name} name={color.name} background={color.hex}/>
        ))

        return(
            <div className='Palette'>
                <h1>haha</h1>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default SingleColorPalette;