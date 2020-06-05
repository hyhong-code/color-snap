import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleRemove(evt) {
    evt.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  handleClick() {
    this.props.toPelette(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const miniBoxes = colors.map((color) => (
      <div
        key={color.name}
        className={classes.mini}
        style={{ backgroundColor: color.color }}
      ></div>
    ));
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={this.handleRemove}
        />
        <div className={classes.colors}>{miniBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
