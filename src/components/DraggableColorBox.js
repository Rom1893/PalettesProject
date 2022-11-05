import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../Styles/DraggableColorBoxStyles"
import DeleteIcon from '@material-ui/icons/Delete';

function DraggableColorbox(props) {

    const { classes } = props;
    return (
        <div className={classes.root} style={{ backgroundColor: props.color }}>
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon className={classes.deleteIcon}/>
            </div>

        </div>
    )
}

export default withStyles(styles)(DraggableColorbox)