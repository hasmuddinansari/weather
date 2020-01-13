import React, { Component } from 'react'
import style from "./NewWeatherCard.module.css"
import SearchForm from "./SearchForm"


const Cards = (props)=>{
    return (
        <div>
        <div className=" d-flex container-fluid  justify-content-center">
                            
                            <h5 className="bg-info border col-md-5 col-9 " >
                                {props.name}
                            </h5>
        <h5 className="bg-dark mx-1 border col-md-5 col-3" >
            {props.value}
          </h5>
         </div>
         </div>
    )
}

export class NewWeatherCard extends Component {
    constructor(props){
        super(props)
    }
    kToCel = (tp)=>{
        let c;
        c = Math.round(tp-273)
        return c
    }
    render() {
        if(!this.props.toggle){
            return  <SearchForm toggleChange={this.props.toggleChange} getWeather={this.props.getWeather}/>
          }
        const {weather, name, main} = this.props.data
        // console.log(this.props.data)
        // console.log("main",main[0].temp)
        const wValue = []
        const names = [ "Min Temp", "Max Temp","Pressure", "Humadity", "Visibility", "Wind Speed"]
        
        return (<>
        <div className="justify-content-center container-fluid row">
        <button onClick={this.props.toggleChange} className="btn btn-success px-5">Search New</button>
        </div>
            <div className={`d-flex justify-content-center p-3`} >
                <div className={`col-md-6 col-12 text-center ${style.card}`}>
                <div>
                <div className="row">
                 {/* <h1 className="display-3">{this.kToCel(main.temp)}&deg;C</h1> */}
                {/* <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/> */}
                </div>
                {/* <h2>{weather[0].main}</h2> */}
                <h3>{name}</h3>
                </div>
                {names.map(name=>{
                    return <Cards key={name} name={name} value="203"/>
                })}
                </div>
                </div>
               </> 
            
            
        )
    }
}

export default NewWeatherCard
