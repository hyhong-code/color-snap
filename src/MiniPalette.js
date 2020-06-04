import React from "react";
import styles from "./styles/MiniPaletteStyles";
import { withStyles } from "@material-ui/core/styles";

const MiniPalette = (props) => {
  const { classes, paletteName, emoji, colors } = props;
  const miniBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.mini}
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
