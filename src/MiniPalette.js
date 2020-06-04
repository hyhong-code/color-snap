import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: {
    backgroundColor: "red",
    "& h1": {
      color: "white",
      "& span": {
        color: "yellow",
      },
    },
  },
  secondary: {
    backgroundColor: "pink",
  },
};

const MiniPalette = (props) => {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>
        MINI PALETTE <span>WOW</span>
      </h1>
      <div className={classes.secondary}>Hello</div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
