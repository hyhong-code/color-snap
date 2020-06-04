import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { withStyles } from "@material-ui/core/styles";

class PaletteList extends Component {
  toPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>You Palette List</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette, i) => (
              <MiniPalette
                key={`${palette.id}-${i}`}
                {...palette}
                handleClick={() => this.toPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
