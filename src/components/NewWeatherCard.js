import React, { Component } from 'react'
import style from "./NewWeatherCard.module.css"
import SearchForm from "./SearchForm"
import {connect} from "react-redux"


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
        kToCel=(tm)=>{
            let c = Math.round(tm-273)
            return c
        }

        render(){
        if(!this.props.toggle){
            return <SearchForm toggleChange={this.props.toggleChange}/>
        }
        else if(this.props.data.cod=='404'){
            return (<div className="p-5">
                <h1 className="text-danger">CITY NOT FOUND</h1>
                <button onClick={this.props.toggleChange} className="btn btn-success px-5">GO BACK !!</button>
            </div>)
        }
        const {data} = this.props
        const{name, main, visibility, wind, weather} = data
        const namesValue = [this.kToCel(main.temp_min), this.kToCel(main.temp_max), main.pressure, main.humidity,visibility, wind.speed]
        const names = [ "Min Temp", "Max Temp","Pressure", "Humidity", "Visibility", "Wind Speed"]
        return (<>
        <div className="justify-content-center container-fluid row">
        <button onClick={this.props.toggleChange} className="btn btn-success px-5">Search New</button>
        </div>
            <div className={`d-flex justify-content-center p-3`} >
                <div className={`col-md-6 col-12 text-center ${style.card}`}>
                <div>
                <div className="row justify-content-center">
                 <h1 className="display-3">{this.kToCel(main.temp)}&deg;C</h1>
                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/>
                </div>
                <h2 title={weather[0].description}>{weather[0].main}</h2>
                  <h3>{name}</h3>
                </div>
                {names.map((name, index)=>{
                    return <Cards key={name} name={name} value={namesValue[index]}/>
                })}
                </div>
                </div>
               </> 
            
            
        )
    }
}
const mapStateToProps = state =>{
    return {
        data:state.data
    }
}
export default connect(mapStateToProps)(NewWeatherCard)
