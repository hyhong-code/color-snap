import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// RC Slider's css before custom css
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ format: evt.target.value }, () => {
      this.props.changeFormat(this.state.format);
    });
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">Color Snap</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">rgb - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">rgba - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
