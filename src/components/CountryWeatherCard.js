import React from 'react'
// http://openweathermap.org/img/wn/10d@2x.png
// icon for weather condition

export default function CountryWeatherCard({data}) {
    const {name, main, weather} = data[0]
    const kToCel = (tp)=>{
        let c;
        c = Math.round(tp-273)
        return c
    }
    return (
        <div className="container row justify-content-center">
        <div className="card col-md-6 col-12">
            <ul className="list-group">
                <li className="list-group-item">
                    <h2>{name}</h2>
                     </li>
                <li className="list-group-item">
                    <h4>
                        Temperaturre
                    </h4>
                    Normal : {kToCel(main.temp)}  &deg;C  <br/>
                    Min : {kToCel(main.temp_min)} &deg;C <br/>
                    max : {kToCel(main.temp_max)} &deg;C  <br/>
                </li>
                <li className="list-group-item">
                        <h3>Weather</h3>
                        Condition: {weather[0].description}
                </li>
            </ul>   
        </div>
        </div>
    )
}
