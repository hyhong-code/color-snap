import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

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
    const { paletteName, emoji, id } = this.props.palette;
    const colorBox = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showMore={false}
      />
    ));

    return (
      <div className="Palette SingleColorPalette">
        <Navbar changeFormat={this.changeFormat} showSlider={false} />
        <div className="Palette-colors">
          {colorBox}
          <div className="ColorBox back">
            <Link to={`/palette/${id}`} className="back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
