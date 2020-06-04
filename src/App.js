import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedPalettes,
    };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id);
  }

  savePalette(newPalette) {
    this.setState((ps) => ({
      palettes: [...ps.palettes, newPalette],
    }));
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList {...routeProps} palettes={this.state.palettes} />
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={() => (
            <NewPaletteForm
              savePalette={this.savePalette}
              allPalettes={this.state.palettes}
            />
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
