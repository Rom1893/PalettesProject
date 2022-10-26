import './Styles/App.css';
import React, { Component } from "react";
import Palette from './components/Palette';
import SeedColors from './Seeds/SeedColors';
import { generatePalette } from './Seeds/colorHelpers';
import {Route, Switch} from "react-router-dom"
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';


class App extends Component {

  findPatelle = (id) => {
    return SeedColors.find(function(palette){
      return palette.id === id
    })
  }

  render() {
 

    return (
        <Switch>
          <Route exact path="/" render={(routeProps)=><PaletteList palettes={SeedColors} {...routeProps}/>}/>
          <Route 
          exact 
          path="/palette/:id" 
          render={(routeProps)=> 
          <Palette 
          palette ={generatePalette(this.findPatelle(routeProps.match.params.id))}/> }
          />
          <Route exact path="/palette/:paletteId/:colorId" render={() => <h1>single color palette</h1>}/>
        </Switch>

    );
  }
}

export default App;
