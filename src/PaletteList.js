import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>Your Palette List</h1>
        <MiniPalette />
        {palettes.map((palette) => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
