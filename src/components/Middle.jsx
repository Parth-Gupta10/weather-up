import React, {useContext} from 'react';
import {weather} from '../context';
import ForcastCard from './ForcastCard';

const Middle = (props) => {

  const value = useContext(weather);

  if (Object.keys(value.weatherData).length === 0 || value.error !== "") {
    return (
    <div className="middle-container coldBackgroundMiddle">
      <div className="row row-cols-1 row-cols-md-3" style={{padding: '5px'}}>
        <ForcastCard
          heading= "Tomorrow"
          img= "http://openweathermap.org/img/wn/01d.png"
          weatherDetail= ""
          maxTemp= ""
          minTemp= ""
          humidity= ""
          windSpeed= ""
        />
        <ForcastCard
          heading= "Thursday"
          img= "http://openweathermap.org/img/wn/01n.png"
          weatherDetail= ""
          maxTemp= ""
          minTemp= ""
          humidity= ""
          windSpeed= ""
        />
        <ForcastCard
          heading= "Friday"
          img= "http://openweathermap.org/img/wn/09d.png"
          weatherDetail= ""
          maxTemp= ""
          minTemp= ""
          humidity= ""
          windSpeed= ""
        />
      </div>
    </div>
  )

  } else {

    return (
    <div className={value.weatherData.current.temp < 18 ? "middle-container coldBackgroundMiddle" : "middle-container hotBackgroundMiddle"}>
      <div className="row row-cols-1 row-cols-md-3">
        <ForcastCard
          heading= "Tomorrow"
          img= {"http://openweathermap.org/img/wn/" + value.weatherData.daily[1].weather[0].icon + ".png"}
          weatherDetail= {value.weatherData.daily[1].weather[0].main}
          maxTemp= {Math.round(value.weatherData.daily[1].temp.max)}
          minTemp= {Math.round(value.weatherData.daily[1].temp.min)}
          humidity= {value.weatherData.daily[1].humidity}
          windSpeed= {Math.round(value.weatherData.daily[1].wind_speed)}
        />
        <ForcastCard
          heading= "Saturday"
          img= {"http://openweathermap.org/img/wn/" + value.weatherData.daily[2].weather[0].icon + ".png"}
          weatherDetail= {value.weatherData.daily[2].weather[0].main}
          maxTemp= {Math.round(value.weatherData.daily[2].temp.max)}
          minTemp= {Math.round(value.weatherData.daily[2].temp.min)}
          humidity= {value.weatherData.daily[2].humidity}
          windSpeed= {Math.round(value.weatherData.daily[2].wind_speed)}
        />
        <ForcastCard
          heading= "Sunday"
          img= {"http://openweathermap.org/img/wn/" + value.weatherData.daily[3].weather[0].icon + ".png"}
          weatherDetail= {value.weatherData.daily[3].weather[0].main}
          maxTemp= {Math.round(value.weatherData.daily[3].temp.max)}
          minTemp= {Math.round(value.weatherData.daily[3].temp.min)}
          humidity= {value.weatherData.daily[3].humidity}
          windSpeed= {Math.round(value.weatherData.daily[3].wind_speed)}
        />
      </div>
    </div>
  )
  }
}

export default Middle;
