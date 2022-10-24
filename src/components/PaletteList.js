import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PaletteList extends Component {



  render() {


    return (
      <div>
        <h1>hihi</h1>
        {this.props.palettes.map(m => (
          <p>
            <Link to={`/palette/${m.id}`}>{m.paletteName}</Link>
          </p>

        ))}
      </div>
    );
  }
}

export default PaletteList;
