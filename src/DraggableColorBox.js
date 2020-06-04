import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-3.5px",
  },
};

function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      {props.color}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
