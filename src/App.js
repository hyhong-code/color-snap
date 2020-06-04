import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>INDIVIDUAL PALETTE</h1>}
        />
      </Switch>
    );
  }
}

export default App;
{
  /* <div className="App">
        <Palette palette={generatePalette(seedPalettes[4])} />
      </div> */
}
