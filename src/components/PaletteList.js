import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from "@material-ui/styles";
import styles from "../Styles/PaletteListStyles";

class PaletteList extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`)
  }


  render() {
    const { classes, container } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Color Picker</h1>
          </nav>
          <div className={classes.palettes}>
            {this.props.palettes.map(m => (
              <MiniPalette {...m} goToPalette={() =>this.goToPalette(m.id)} />
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
