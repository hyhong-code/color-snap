import sizes from "./sizes";
import Chroma from "chroma-js";

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
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    width: "95%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: (props) =>
      Chroma(props.color).luminance() <= 0.08
        ? "rgba(255, 255, 255, 0.75)"
        : "rgba(0, 0, 0, 0.75)",
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

export default styles;
