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
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      handleSubmit,
      handleChange,
      newPaletteName,
      handleHideForm,
    } = this.props;
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          NAME YOUR CUSTOM PALETTE
        </DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Wow, what an amazing palette! Let's give it a name, make sure it
              is unique ;)
            </DialogContentText>
            <Picker />
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
    );
  }
}

export default PaletteMetaForm;
