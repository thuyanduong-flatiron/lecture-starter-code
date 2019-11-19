import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Nav from '../component/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav
        title="Paintr"
        tagline="List of Paintings"
        icon="paint brush"
        color="blue"
        />
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
