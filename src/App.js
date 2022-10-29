import './Styles/App.css';
import React, { Component } from "react";
import Palette from './components/Palette';
import SeedColors from './Seeds/SeedColors';
import { generatePalette } from './Seeds/colorHelpers';
import { Route, Switch } from "react-router-dom"
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';


class App extends Component {

  findPalette = (id) => {
    return SeedColors.find(function (palette) {
      return palette.id === id
    })
  }

  render() {


    return (
      <Switch>

        <Route
          exact
          path="/palette/new"
          render={()=> <NewPaletteForm/>}
        />


        {/*Route for passing color seeds to the paletteList Component */}
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={SeedColors} {...routeProps} />} />

        {/*Route that passes down generatePalette function into a route that matches the id of the palette */}
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) =>
            <Palette
              palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />

        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) =>
            <SingleColorPalette
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
              colorId={routeProps.match.params.colorId}
            />}
        />


      </Switch>

    );
  }
}

export default App;
