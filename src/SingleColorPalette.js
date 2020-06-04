import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades();
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

  render() {
    const colorBox = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color.hex}
        showMore={false}
      />
    ));

    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBox}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
