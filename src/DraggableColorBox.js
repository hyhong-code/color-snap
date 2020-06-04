import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover $deleteIcon": {
      color: "white",
      transform: "scale(1.4)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "0.75rem",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

function DraggableColorBox(props) {
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
}

export default withStyles(styles)(SortableElement(DraggableColorBox));
