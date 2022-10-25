import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {



  render() {


    return (
      <div>
        {this.props.palettes.map(m => (
          <MiniPalette {...m}/>

        ))}
      </div>
    );
  }
}

export default PaletteList;
