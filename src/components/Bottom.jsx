import React, {useContext} from 'react';
import {weather} from '../context';

const Bottom = (props) => {

  const value = useContext(weather);

  if (Object.keys(value.weatherData).length === 0 || value.error !== "") {
    return (
      <div className="bottom-container coldBackgroundBottom">
        <div className="text-block" style={{padding: '15px 20px 20px 20px'}}>
          <h3 className="card-title">Details</h3>
          <div className="row">
            <div className="col">
              <i className="fas fa-temperature-low" style={{paddingRight: '2%'}}></i> <b>Feels like: </b> <span style={{paddingLeft: '2%'}}>___</span>
            </div>
            <div className="col">
              <i className="fas fa-tint" style={{paddingRight: '2%'}}></i> <b>Humidity: </b> <span style={{paddingLeft: '2%'}}>___</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <i className="fas fa-tachometer-alt" style={{paddingRight: '2%'}}></i> <b>Pressure: </b> <span style={{paddingLeft: '2%'}}>___</span>
            </div>
            <div className="col">
              <i className="fas fa-wind" style={{paddingRight: '2%'}}></i> <b>Wind Speed: </b> <span style={{paddingLeft: '2%'}}>___</span>
            </div>
          </div>
        </div>
      </div>
    )

  } else {
    return (
      <div className={value.weatherData.current.temp < 18 ? "bottom-container coldBackgroundBottom" : "bottom-container hotBackgroundBottom"}>
        <div className="text-block" style={{padding: '15px 20px 20px 20px'}}>
          <h3 className="card-title">Details</h3>
          <div className="row">
            <div className="col">
              <i className="fas fa-temperature-low" style={{paddingRight: '2%'}}></i> <b>Feels like: </b> {Math.round(value.weatherData.current.feels_like)}&deg;C
            </div>
            <div className="col">
              <i className="fas fa-tint" style={{paddingRight: '2%'}}></i> <b>Humidity: </b> {value.weatherData.current.humidity}%
            </div>
          </div>
          <div className="row">
            <div className="col">
              <i className="fas fa-tachometer-alt" style={{paddingRight: '2%'}}></i> <b>Pressure: </b> {value.weatherData.current.pressure} hPa
            </div>
            <div className="col">
              <i className="fas fa-wind" style={{paddingRight: '2%'}}></i> <b>Wind Speed: </b> {value.weatherData.current.wind_speed} m/s
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Bottom;
