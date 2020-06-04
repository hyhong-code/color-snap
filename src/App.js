import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id) {
    return seedPalettes.find((palette) => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList {...routeProps} palettes={seedPalettes} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={({
            match: {
              params: { id },
            },
          }) => <Palette palette={generatePalette(this.findPalette(id))} />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={({
            match: {
              params: { paletteId, colorId },
            },
          }) => (
            <SingleColorPalette
              colorId={colorId}
              palette={generatePalette(this.findPalette(paletteId))}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
