import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';
import "rc-slider/assets/index.css"
import "../Styles/Palette.css"

class Palette extends Component {

    state = {
        level: 500
    }

    changeLevel = (level) => {
        this.setState({ level })
    }

    render() {

        const colorBoxes = this.props.palette.colors[this.state.level].map(m => (
            <ColorBox background={m.hex} name={m.name} />
        ))

        return (
            <div className='Palette'>
                <div className='slider'>
                    <Slider
                        defaultValue={this.state.level}
                        min={100} max={900}
                        step={100}
                        onAfterChange={this.changeLevel} />
                </div>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;
