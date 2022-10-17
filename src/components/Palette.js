import React, { Component } from 'react'
import ColorBox from './ColorBox';
import "../Styles/Palette.css"

class Palette extends Component {


    render() {

        const colorBoxes = this.props.colors.map(m=>(
            <ColorBox background ={m.color} name={m.name}/>
        ))

        return (
            <div className='Palette'>
                <div className='Palette-colors'>
                {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;
