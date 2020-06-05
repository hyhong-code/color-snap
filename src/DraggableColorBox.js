import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = (props) => {
  const { classes, color, removeColorBox } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{color}</span>
        <span className={classes.deleteIcon}>
          <DeleteIcon onClick={() => removeColorBox(color)} />
        </span>
      </div>
    </div>
  );
};

export default withStyles(styles)(SortableElement(DraggableColorBox));
