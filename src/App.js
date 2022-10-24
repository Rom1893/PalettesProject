import './Styles/App.css';
import { Component } from 'react';
import Palette from './components/Palette';
import SeedColors from './Seeds/SeedColors';
import { generatePalette } from './Seeds/colorHelpers';
import {Route, Switch} from "react-router-dom"


class App extends Component {

  findPatelle = (id) => {
    return SeedColors.find(function(palette){
      return palette.id === id
    })
  }

  render() {
 

    return (
        <Switch>
          <Route exact path="/" render={()=><h1>PALETTE LIST GOES HERE</h1>}/>
          <Route 
          exact 
          path="/palette/:id" 
          render={(routeProps)=> 
          <Palette 
          palette ={generatePalette(this.findPatelle(routeProps.match.params.id))}/> }
          />
        </Switch>

      // <div className=''>
      //   <Palette palette={generatePalette(SeedColors[4])} />
      // </div>
    );
  }
}

export default App;
