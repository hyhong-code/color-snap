import React, { Component } from "react";
import Chroma from "chroma-js";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
    };
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    this.setState({ showOverlay: !this.state.showOverlay }, () => {
      setTimeout(() => {
        this.setState({ showOverlay: !this.state.showOverlay });
      }, 1500);
    });
  }

  render() {
    const { background, name, moreUrl, showLink } = this.props;
    const { showOverlay } = this.state;
    const isDarkColor = Chroma(background).luminance() <= 0.08;
    const isLightColor = Chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div className="ColorBox" style={{ background }}>
          <div
            className={`copy-overlay ${showOverlay && "show"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${showOverlay && "show"}`}>
            <h1>Copied!</h1>
            <p className={`${isLightColor && "dark-text"}`}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(evt) => evt.stopPropagation()}>
              <span className={`show-more ${isLightColor && "dark-text"}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
