import React, {useContext} from 'react';
import {weather} from '../context';
import ForcastCard from './ForcastCard';

const Middle = (props) => {

  const value = useContext(weather);

  let today = new Date();
  let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

  var nextDay = new Date(today);
  nextDay.setDate(today.getDate()+2);

  var lastDay = new Date(nextDay);
  lastDay.setDate(nextDay.getDate()+1);

  if (Object.keys(value.weatherData).length === 0 || value.error !== "") {
    return (
    <div className="middle-container coldBackgroundMiddle">
      <div className="row row-cols-3 row-cols-md-3" style={{padding: '5px'}}>
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
          heading= {daylist[nextDay.getDay()]}
          img= {"http://openweathermap.org/img/wn/" + value.weatherData.daily[2].weather[0].icon + ".png"}
          weatherDetail= {value.weatherData.daily[2].weather[0].main}
          maxTemp= {Math.round(value.weatherData.daily[2].temp.max)}
          minTemp= {Math.round(value.weatherData.daily[2].temp.min)}
          humidity= {value.weatherData.daily[2].humidity}
          windSpeed= {Math.round(value.weatherData.daily[2].wind_speed)}
        />
        <ForcastCard
          heading= {daylist[lastDay.getDay()]}
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
