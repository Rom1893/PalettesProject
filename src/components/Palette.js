import React, { Component } from 'react'
import ColorBox from './ColorBox';
import "../Styles/Palette.css"
import Slider, { Range } from 'rc-slider';
import "rc-slider/assets/index.css"

class Palette extends Component {

    state = {
        level: 500
    }

    changeLevel = (level) => {
        this.setState({level})
    }

    render() {

        const colorBoxes = this.props.palette.colors[this.state.level].map(m=>(
            <ColorBox background ={m.hex} name={m.name}/>
        ))

        return (
            <div className='Palette'>
                <Slider 
                defaultValue = {this.state.level} 
                min={100} max={900} 
                step={100}
                onAfterChange={this.changeLevel}/>
                <div className='Palette-colors'>
                {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;
