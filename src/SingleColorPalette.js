import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  back: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "white",
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
    },
  },
};

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades();
    this.state = {
      format: "hex",
    };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades() {
    const {
      palette: { colors },
      colorId,
    } = this.props;
    const shades = [];
    for (const shadeKey in colors) {
      shades.push(colors[shadeKey].find((color) => color.id === colorId));
    }
    return shades.slice(1);
  }

  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { format } = this.state;
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBox = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar changeFormat={this.changeFormat} showSlider={false} />
        <div className={classes.colors}>
          {colorBox}
          <div className={classes.back}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
