import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteMetaForm extends Component {
  state = {
    showStage: "form",
  };

  showEmojiPicker = () => {
    this.setState({ showStage: "emoji" });
  };

  submitForm = (emoji) => {
    this.props.handleSubmit(emoji.native);
    this.setState({ showStage: "" });
  };

  render() {
    const { handleChange, newPaletteName, handleHideForm } = this.props;
    const { showStage } = this.state;
    return (
      <div>
        <Dialog open={showStage === "emoji"} onClose={handleHideForm}>
          <Picker onSelect={this.submitForm} title="Pick a palette emoji!" />
        </Dialog>
        <Dialog
          open={showStage === "form"}
          onClose={handleHideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            NAME YOUR CUSTOM PALETTE
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Wow, what an amazing looking palette! Let's give it a name and
                save it to your collection!
              </DialogContentText>
              <TextValidator
                name="newPaletteName"
                value={newPaletteName}
                label="Palette name..."
                fullWidth
                margin="normal"
                onChange={handleChange}
                validators={["required", "isPeletteNameUnique"]}
                errorMessages={[
                  "Please enter a palette name!",
                  "Palette name already in use!",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleHideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                SAVE PALETTE
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
