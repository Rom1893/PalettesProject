import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import "emoji-mart/css/emoji-mart.css"

class PaletteMetaForm extends Component {
    state = {
        open: true,
        newPaletteName: ""
    };

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
            return this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const { newPaletteName } = this.state;

        return (
                <Dialog
                    open={this.state.open}
                    onClose={this.props.hideForm}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette name</DialogTitle>
                    <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your new Palette. Make sure it's unique!
                            </DialogContentText>

                            <Picker/>
                            <TextValidator
                                onChange={this.handleChange}
                                name="newPaletteName"
                                label="Palette Name"
                                fullWidth
                                margin="normal"
                                value={newPaletteName}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter Palette Name", "Name already taken"]}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.props.hideForm} color="primary">
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type='submit'
                            >Save Palette</Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
        );
    }
}


export default PaletteMetaForm;
