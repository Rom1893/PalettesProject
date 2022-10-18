import './Styles/App.css';
import { Component } from 'react';
import Palette from './components/Palette';
import SeedColors from './Seeds/SeedColors';


class App extends Component {

  

  render() {

   

    return (
      <div className=''>
        <Palette {...SeedColors[4]} />
      </div>
    );
  }
}

export default App;
