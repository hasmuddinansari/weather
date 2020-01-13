import React, { Component } from 'react'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NewWeatherCard from "./components/NewWeatherCard"
const API_KEY ="b2123f5a744b70575982bffe867f5982"

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        local:{},
        toggle:false
    }
}
  getWeather = async(city, country)=>{
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const res = await apiCall.json()
    this.setState({
        ...this.state,
        local:res
    })
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
        <Route exact path="/" component={(props)=><NewWeatherCard toggleChange={this.toggleChange} toggle={this.state.toggle} getWeather={this.getWeather} data={this.state.local} {...props} />}/>
        <Route render={()=><h3 className="text-danger">404 ! Page Not found</h3>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
