import React, { Component } from 'react'
import styles from "../Styles/MiniPaletteStyles"
import { withStyles } from "@material-ui/styles";



function MiniPalette(props) {


    const { classes, paletteName, emoji } = props;
    return (
        <div className={classes.root}>
            <div className={classes.colors}>

            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )

}

export default withStyles(styles)(MiniPalette);




