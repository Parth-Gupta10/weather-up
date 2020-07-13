import React, {useContext} from 'react';
import {weather} from '../context';

const ForcastCard = (props) => {

  const value = useContext(weather);

  if (Object.keys(value.weatherData).length === 0) {
    return(
      <div className="col mb-2">
        <div className="card forcastCard">
          <div className="card-body">
            <h5 className="card-title">{props.heading}</h5>
            <p>
              <b>Max/Min: </b> ___</p>
            <p>
              <b>Humidity: </b> ___</p>
            <p>
              <b>Wind Speed: </b> ___</p>
          </div>
        </div>
      </div>
    );

  } else {

    return (
      <div className="col mb-2">
        <div className="card forcastCard">
        <div className="card-body">
          <h5 className="card-title">{props.heading}</h5>
          <div className="row weatherRow">
            <div className="col-auto">
              <img src={props.img} alt="clipart" className="forcast-weather-clipart"/>
            </div>
            <div className="col-auto weatherDetailCol">
              <h5>{props.weatherDetail}</h5>
            </div>
          </div>
          <p>
            <b>Max/Min: </b>{props.maxTemp}&deg;C/{props.minTemp}&deg;C
            </p>
          <p>
            <b>Humidity: </b>{props.humidity}%</p>
          <p>
            <b>Wind Speed: </b>{props.windSpeed} m/s
          </p>
        </div>
      </div>
    </div>
  )

  }
}

export default ForcastCard;
