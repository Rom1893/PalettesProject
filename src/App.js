import './Styles/App.css';
import React, { Component } from "react";
import Palette from './components/Palette';
import SeedColors from './Seeds/SeedColors';
import { generatePalette } from './Seeds/colorHelpers';
import { Route, Switch } from "react-router-dom"
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Page from './components/Page';


class App extends Component {

  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
    this.state = {
      palettes: savedPalettes || SeedColors
    }
  }

  deletePalette = (id) => {
    this.setState({
      palettes: this.state.palettes.filter(palette => palette.id !== id)
    }, this.syncLocalStorage)
  }


  findPalette = (id) => {
    return this.state.palettes.find(function (palette) {
      return palette.id === id
    })
  }

  syncLocalStorage = () => {
    //save palette to local storage
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }

  savePalette = (newPalette) => {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    }, this.syncLocalStorage)
  }


  render() {


    return (

      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={(routeProps) =>
                  <Page>
                    <NewPaletteForm
                      savePalette={this.savePalette}
                      palettes={this.state.palettes}
                      {...routeProps}
                    />
                  </Page>
                }

              />

              {/*Route for passing color seeds to the paletteList Component */}
              <Route exact path="/" render={(routeProps) =>
                <Page>
                  <PaletteList
                    palettes={this.state.palettes}
                    deletePalette={this.deletePalette}
                    {...routeProps}
                  />
                </Page>
              } />

              {/*Route that passes down generatePalette function into a route that matches the id of the palette */}
              <Route
                exact
                path="/palette/:id"
                render={(routeProps) =>
                  <Page>
                    <Palette
                      palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                  </Page>
                }
              />

              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={(routeProps) =>
                  <Page>
                    <SingleColorPalette
                      palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                      colorId={routeProps.match.params.colorId}
                    />
                  </Page>
                }
              />

              <Route
                render={(routeProps) =>
                  <Page>
                    <PaletteList
                      palettes={this.state.palettes}
                      deletePalette={this.deletePalette}
                      {...routeProps}
                    />
                  </Page>
                }
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  }
}

export default App;
