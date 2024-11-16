import React from "react"
import styles from "../Styles/PaletteFooterStyles";
import withStyles from "@material-ui/styles/withStyles";

function PaletteFooter(props) {

    const {classes} = props;
    return (
        <footer className={classes.PaletteFooter}>
            {props.paletteName}
            <span className={classes.emoji}>{props.emoji}</span>
        </footer>
    )
}

export default withStyles(styles)(PaletteFooter);