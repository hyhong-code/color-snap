import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  toPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes, classes, removePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Your Palette Collection</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette, i) => (
              <MiniPalette
                key={`${palette.id}-${i}`}
                {...palette}
                handleClick={() => this.toPalette(palette.id)}
                removePalette={removePalette}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
