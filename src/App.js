import React, { Component } from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import Weather from "./components/Weather"
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h3> Weather.com</h3>
        <Weather/>

      </div>
    )
  }
}

export default App;
