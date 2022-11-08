import React, {Component} from 'react'
import styles from "../Styles/MiniPaletteStyles"
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete"

class MiniPalette extends Component {

    deletePalette = (e) => {
        e.stopPropagation();
        this.props.deletePalette(this.props.id)
    } 
    

    render() {
    const { classes, paletteName, emoji, colors, goToPalette } = this.props;
    const miniColorBoxes = colors.map(m => (
        <div
          className={classes.miniColor}
          style={{ backgroundColor: m.color }}
          key={m.name}
        />
    ))
    return (
        <div className={classes.root} onClick={goToPalette}>
            <DeleteIcon 
            style={{transition: "all 0.3s ease-in-out"}} 
            className={classes.deleteIcon}
            onClick={this.deletePalette}
            />
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )

}}

export default withStyles(styles)(MiniPalette);




