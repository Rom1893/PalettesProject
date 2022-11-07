import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
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
        stage: "form",
        newPaletteName: ""
    };

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
            return this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showEmojiPicker = () => {
        this.setState({
            stage: "emoji"
        })
    }

    savePalette = (emoji) => {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.handleSubmit(newPalette)
    }

    render() {

        const { newPaletteName } = this.state;

        return (
            <div>
                <Dialog open={this.state.stage === "emoji"}  onClose={this.props.hideForm}>
                    <Picker title='Pick a Palette Emoji' onSelect={this.savePalette} />
                </Dialog>
                <Dialog
                    open={this.state.stage === "form"}
                    onClose={this.props.hideForm}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette name</DialogTitle>
                    <ValidatorForm onSubmit={this.showEmojiPicker}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your new Palette. Make sure it's unique!
                            </DialogContentText>


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
            </div>
        );
    }
}


export default PaletteMetaForm;
