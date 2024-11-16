import React, { Component } from 'react'
import { ChromePicker } from "react-color"
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";
import styles from "../Styles/ColorPickerFormStyles"

class ColorPickerForm extends Component {

    state = {
        currentColor: "Teal",
        newColorName: "",
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
          return this.props.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          );
        });
        ValidatorForm.addValidationRule("isColorUnique", value => {
          return this.props.colors.every(
            ({ color }) => color !== this.state.currentColor
          );
        });
      }

    updateCurrentColor = (newColor) => {
        this.setState({
            currentColor: newColor.hex
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const newColor = { color: this.state.currentColor, name: this.state.newColorName };
        this.props.addNewColor(newColor);
        this.setState({
            newColorName: ""
        })
    }


    render() {

        const { paletteIsFull, classes } = this.props;
        const {currentColor, newColorName} = this.state;

        return (
            <div>
                <ChromePicker className={classes.picker} color={currentColor} onChangeComplete={this.updateCurrentColor} />
                <ValidatorForm onSubmit={this.handleSubmit} ref="form" instantValidate={false}>
                    <TextValidator
                        value={newColorName}
                        className={classes.colorNameInput}
                        name="newColorName"
                        variant="filled"
                        placeholder='Color Name'
                        margin="normal"
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["Enter a color name", "Color name already exists", "Color already used"]}
                    />
                    <Button
                        style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={paletteIsFull}
                        className={classes.addColor}
                    >
                        {paletteIsFull ? "Palette is full" : "Add color"}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);
