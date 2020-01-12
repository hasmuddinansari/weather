import React, { Component } from 'react'
// import Loader from "./Loader"
import SearchForm from "./SearchForm"
import CountryWeatherCard from './CountryWeatherCard'

const API_KEY ="b2123f5a744b70575982bffe867f5982"

export class Weather extends Component {
    constructor(props){
        super(props)
        this.state = {
            local:[]
        }
    }
    getWeather = async(city, country)=>{
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
        const res = await apiCall.json()
        localStorage.setItem("data",JSON.stringify(res))
        const local= JSON.parse(localStorage.getItem("data"))
        this.setState({
            ...this.state,
            local:[local]
        })
    }
    render() {
        console.log(this.state.local)
        return (
            <div>
               <SearchForm getWeather={this.getWeather}/>
             {this.state.local.length !==0 ? <CountryWeatherCard data={this.state.local}/>:null}
            </div>
        )
    }
}

export default Weather




