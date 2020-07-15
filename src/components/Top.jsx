import React, {useContext} from 'react';
import {weather} from '../context';

const Top = (props) => {

  const value = useContext(weather);

  if (Object.keys(value.weatherData).length === 0 || value.error !== "") {
    return (
      <div className="top-container coldBackground">
        <div className="text-block" style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
          <h2 className="main-heading text-capitalize"> Weather Up</h2>

          { window.innerWidth <= 450
            ? <span className="locationBtn" onClick={() => value.openModal()}><i className="fas fa-search-location"></i></span>
            : <button className="btn btn-outline-light locationBtn" onClick={() => value.openModal()}>
              Select Location
              </button>
          }
          <div className="row weatherRow">
            <p>A simple app to display current weather and daily forecast for 3 days.</p>
          </div>
        </div>
      </div>
    )

  } else {
    const imgUrl = "http://openweathermap.org/img/wn/" + value.weatherData.current.weather[0].icon + "@2x.png"
    return (
      <div className= {value.weatherData.current.temp < 18 ? "top-container coldBackground" : "top-container hotBackground"}>
        <div className="text-block" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <h2 className="main-heading text-capitalize">{value.finalCity}, {value.country}</h2>

            { window.innerWidth <= 450
              ? <span className="locationBtn" onClick={() => value.openModal()}><i className="fas fa-search-location"></i></span>
              : <button className="btn btn-outline-light locationBtn" onClick={() => value.openModal()}>
                Select Location
                </button>
            }

          <div className="row weatherRow">
            <div className="col-auto">
              <img src={imgUrl} alt="weather clipart" className="weather-clipart"/>
            </div>
            <div className="col-auto">
              <h3> {Math.round(value.weatherData.current.temp)}&deg;C</h3>
            </div>
          </div>
          <p className="text-capitalize"><b>{value.weatherData.current.weather[0].description}</b></p>
        </div>
      </div>
    )
  }

}

export default Top;
