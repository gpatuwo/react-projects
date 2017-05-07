import React from 'react';
import config from '../config';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {temp: null, location: null};

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.fetchWeather);
  }

  fetchWeather(location){
    //initialize url for request
    let
      latitude = location.coords.latitude,
      longitude = location.coords.longitude,
      url = "http://api.openweathermap.org/data/2.5/weather?";

    url += `lat=${latitude}&lon=${longitude}`;
    url += "&units=imperial";
    url += `&APPID=${config.weatherKey}`;

    let xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange = () => {
      if (xmlRequest.status === 200 &&
        xmlRequest.readyState === XMLHttpRequest.DONE) {
        let data = JSON.parse(xmlRequest.response);
        this.setState({temp: data.main.temp});
        this.setState({location: data.name});
      } else if (xmlRequest.readyState === XMLHttpRequest.DONE
        && xmlRequest.status !== 200){
        console.log("oops xml request failed");
      }
    };
    // initialize request
    xmlRequest.open('GET', url);
    xmlRequest.send();
  }

  render(){
    let content = <div></div>;

    if (this.state.temp) {
      content = <div>
                  <h3>Current Location: {this.state.location}</h3>
                  <h3>Temp: {this.state.temp}</h3>
                </div>;
    } else {
      content = <div>loading location and weather data...</div>;
    }

    return (
      <div className='wrapper'>
        <h2>Weather</h2>
        <div className='section-div'>
          {content}
        </div>
      </div>
    );
  }
}

export default Weather;
