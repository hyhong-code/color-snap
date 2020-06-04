import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColorBtn: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem",
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
  },
};

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      curColor,
      newColorName,
      isPaletteFull,
      updateCurColor,
      addNewColor,
      handleChange,
      classes,
    } = this.props;
    return (
      <div>
        <ChromePicker
          className={classes.picker}
          color={curColor}
          onChangeComplete={updateCurColor}
          disableAlpha
        />
        <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
          <TextValidator
            className={classes.colorNameInput}
            placeholder="GIVE IT A NAME..."
            variant="filled"
            margin="normal"
            name="newColorName"
            value={newColorName}
            onChange={handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Please enter a color name!",
              "Color name must be unique!",
              "Color already exists!",
            ]}
          />
          <Button
            className={classes.addColorBtn}
            variant="contained"
            color="primary"
            style={{ backgroundColor: isPaletteFull ? "grey" : curColor }}
            type="submit"
            disabled={isPaletteFull}
          >
            {isPaletteFull ? "PALETTE FULL" : "ADD COLOR"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
