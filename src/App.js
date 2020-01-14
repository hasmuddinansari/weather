import React, { Component } from 'react'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NewWeatherCard from "./components/NewWeatherCard"

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        toggle:false
    }
}
  toggleChange = ()=>{
    this.setState({
      ...this.state,
      toggle:!this.state.toggle
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={(props)=><NewWeatherCard toggle={this.state.toggle} toggleChange={this.toggleChange} {...props}/>}/>
        <Route render={()=><h3 className="text-danger">404 ! Page Not found</h3>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App
