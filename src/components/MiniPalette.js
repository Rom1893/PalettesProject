import React from 'react'
import styles from "../Styles/MiniPaletteStyles"
import { withStyles } from "@material-ui/styles";



function MiniPalette(props) {

    const { classes, paletteName, emoji, colors } = props;
    const miniColorBoxes = colors.map(m => (
        <div
          className={classes.miniColor}
          style={{ backgroundColor: m.color }}
          key={m.name}
        />
    ))
    return (
        <div className={classes.root} onClick={props.goToPalette}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )

}

export default withStyles(styles)(MiniPalette);




