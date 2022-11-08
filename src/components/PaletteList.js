import React, { Component } from 'react'
import MiniPalette from './MiniPalette';
import { withStyles } from "@material-ui/styles";
import styles from "../Styles/PaletteListStyles";
import { Link } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"

class PaletteList extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`)
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>Color Picker</h1>
            <Link to="/palette/new">Create NewPalette</Link>
          </nav>
            <TransitionGroup className={classes.palettes}>
              {this.props.palettes.map(m => (
                <CSSTransition key={m.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...m}
                  goToPalette={() => this.goToPalette(m.id)}
                  deletePalette={this.props.deletePalette}
                  key={m.id}
                  id={m.id}
                />
                </CSSTransition>
              ))}
            </TransitionGroup>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
