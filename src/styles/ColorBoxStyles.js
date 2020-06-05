import Chroma from "chroma-js";
export default {
  colorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover $copyButton": {
      opacity: 1,
    },
  },
  copyText: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
  },
  colorName: {
    color: (props) =>
      Chroma(props.background).luminance() <= 0.08
        ? "white"
        : "rgba(0, 0, 0, 0.75)",
  },
  showMore: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    border: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    cursor: "pointer",
    textDecoration: "none",
    opacity: 0,
    transition: "all 0.3s ease-in-out",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "0.75rem",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform 0.5s ease-in-out",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
  },
  showMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "15",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
};
