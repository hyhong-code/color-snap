import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from "./colorHelpers";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // load data from persistance layer
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedPalettes,
    };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.removePalette = this.removePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id);
  }

  removePalette(id) {
    this.setState(
      (ps) => ({
        palettes: ps.palettes.filter((palette) => palette.id !== id),
      }),
      () => {
        // use setState callback to ensure palette is removed from state before storing
        this.syncLocalStorage();
      }
    );
  }

  savePalette(newPalette) {
    this.setState(
      (ps) => ({
        palettes: [...ps.palettes, newPalette],
      }),
      () => {
        // use setState callback to ensure new palette is added to state before storing
        this.syncLocalStorage();
      }
    );
  }

  // save data to persistance layer
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList
              {...routeProps}
              palettes={this.state.palettes}
              removePalette={this.removePalette}
            />
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
