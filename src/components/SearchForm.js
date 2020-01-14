import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux"
import {searchWeather} from "./REDUX/Action"


const API_KEY ="b2123f5a744b70575982bffe867f5982"

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country:"",
       city:""
      }
    
  }
  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };
  submit = async() => {
      const {city, country} = this.state
      const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
      const res = await apiCall.json()
      const {searchWeather, toggleChange} = this.props
      searchWeather(res)
      toggleChange()
    
  };
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center p-5">
        <form onSubmit={(e)=>{e.preventDefault()
                          return this.submit()
          }} className="flex-column col-md-5 col-12 bg-light  border p-2 d-flex">
          <h2 className="text-center text-danger">Weather</h2>
          <TextField
            className="m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="city"
            label="City"
            placeholder="New York, New Delhi..."
          />
          
            <TextField
              id="outlined-basic"
              className="m-2"
              onChange={this.handleChange}
              name="country"
              label="Country ID"
              
              placeholder="IN, UK, US..."
            />
           
          <Button
            onClick={this.submit}
            variant="outlined"
            className="py-2  m-2 bg-dark text-white"
            color="primary"
          >
            Search
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps =state=>{
  return {
    data:state.data
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    searchWeather:item=>dispatch(searchWeather(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)