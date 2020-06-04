import React, { Component } from "react";
import Chroma from "chroma-js";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/core/styles";
import "./ColorBox.css";

const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1,
    },
  },
  copyText: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
  },
  colorName: {
    color: (props) =>
      Chroma(props.background).luminance() <= 0.08
        ? "white"
        : "rgba(0, 0, 0, 0.75)",
  },
  showMore: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    border: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    cursor: "pointer",
    textDecoration: "none",
    opacity: 0,
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
    };
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    this.setState({ showOverlay: !this.state.showOverlay }, () => {
      setTimeout(() => {
        this.setState({ showOverlay: !this.state.showOverlay });
      }, 1500);
    });
  }

  render() {
    const {
      background,
      name,
      moreUrl,
      showingFullPalette,
      classes,
    } = this.props;
    const { showOverlay } = this.state;
    const isDarkColor = Chroma(background).luminance() <= 0.08;
    const isLightColor = Chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div className={classes.colorBox} style={{ background }}>
          <div
            className={`copy-overlay ${showOverlay && "show"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${showOverlay && "show"}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(evt) => evt.stopPropagation()}>
              <span className={classes.showMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
