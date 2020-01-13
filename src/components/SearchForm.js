import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default class SearchForm extends Component {
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
  submit = () => {
    const {getWeather} = this.props
    const {country, city} = this.state
    getWeather(city, country)
    this.props.toggleChange()
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

