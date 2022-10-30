import React from "react";
import {withStyles} from "@material-ui/styles";
import styles from "../Styles/DraggableColorBoxStyles"

function DraggableColorbox(props) {

    const {classes} = props;
    return(
        <div className={classes.root} style={{backgroundColor: props.color}}>
            {props.color}
        </div>
    )
}

export default withStyles (styles)(DraggableColorbox)