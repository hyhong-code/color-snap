import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FormNavStyles";

class FormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
    this.handleShowForm = this.handleShowForm.bind(this);
    this.handleHideForm = this.handleHideForm.bind(this);
  }

  handleShowForm() {
    this.setState({ showForm: true });
  }

  handleHideForm() {
    console.log("hide!");
    this.setState({ showForm: false });
  }

  render() {
    const {
      classes,
      open,
      newPaletteName,
      handleDrawerOpen,
      handleChange,
      handleSubmit,
    } = this.props;
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
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              DESIGN CUSTOM PALETTE
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/" className={classes.link}>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                GO BACK
              </Button>
            </Link>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.handleShowForm}
            >
              SAVE PALETTE
            </Button>
          </div>
        </AppBar>
        {this.state.showForm && (
          <PaletteMetaForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            newPaletteName={newPaletteName}
            handleHideForm={this.handleHideForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FormNav);
