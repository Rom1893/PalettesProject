import React, { Component } from 'react'
import ColorBox from './ColorBox';
import NavBar from "./NavBar";
import "../Styles/Palette.css";

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
                <NavBar level={this.state.level} changeLevel={this.changeLevel}/>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;
