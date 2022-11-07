import React, { Component } from 'react'
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import styles from "../Styles/PaletteFormNavStyles"
import PaletteMetaForm from './PaletteMetaForm';


class PaletteFormNav extends Component {

    state={
        formShowing: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClickOpen = () => {
        this.setState({ formShowing: true });
    };

    render() {
        const { classes, open } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color="default"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create a New Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to="/">
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >Go back</Button>
                        </Link>
                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.handleClickOpen}
                        className={classes.button}
                        >
                            Save 
                        </Button>
                    </div>
                </AppBar>

                {this.state.formShowing && <PaletteMetaForm
                            palettes={this.props.palettes}
                            handleSubmit={this.props.handleSubmit}
                        />}
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);