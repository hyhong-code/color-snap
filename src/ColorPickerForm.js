import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
    } = this.props;
    return (
      <div>
        <ChromePicker
          color={curColor}
          onChangeComplete={updateCurColor}
          disableAlpha
        />
        <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
          <TextValidator
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

export default ColorPickerForm;
