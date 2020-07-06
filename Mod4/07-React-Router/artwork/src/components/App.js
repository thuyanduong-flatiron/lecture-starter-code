import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: '',
        selectedPainting: null
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        paintingsList: json
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onSelectPainting = (painting) => {
    this.setState({selectedPainting: painting})
  }

  getFilteredPaintings = () => {
    return this.state.paintingsList.filter(painting => painting.title.includes(this.state.searchTerm))
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>
        <PaintingDetails painting={this.state.selectedPainting}/>
        <PaintingsList
          onSearchHandler={this.onSearchHandler}
          paintings={this.getFilteredPaintings()}
          onSelectPainting={this.onSelectPainting}
        />
      </div>
    );
  }
}

export default App;
