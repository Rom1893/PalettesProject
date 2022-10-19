import './Styles/App.css';
import { Component } from 'react';
import Palette from './components/Palette';
import SeedColors from './Seeds/SeedColors';
import { generatePalette } from './Seeds/colorHelpers';


class App extends Component {

  

  render() {

   

    return (
      <div className=''>
        <Palette palette={generatePalette(SeedColors[4])} />
      </div>
    );
  }
}

export default App;
