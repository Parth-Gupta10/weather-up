import React, {useState, useEffect} from "react";
const weather = React.createContext();
const {Provider} = weather;

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherProvider = ({children}) => {

  const [city, setCity] = useState("");
  const [finalCity, setFinalCity] = useState("")
  const [country, setCountry] = useState("");
  const [modalOpen, setModalOpen] = useState(true);
  const [loc, setLoc] = useState({
    lat: '',
    lon: ''
  });
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const locUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
  const url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + loc.lat + "&lon=" + loc.lon + "&units=metric&exclude=minutely&appid=" + apiKey;

  useEffect(() => {
    if (city.length > 0) {
      fetch(locUrl)
      .then(res => res.json())
      .then(function(data) {
        console.log(data);
        if (data.cod !== 404) {
          setError("");
          setModalOpen(false);
        }
        setFinalCity(data.name);
        setCountry(data.sys.country);
        setLoc({
          lat: data.coord.lat,
          lon: data.coord.lon
        })
      })
      .catch(err => setError("Please enter a valid city name"))
    }
  }, [city]);

  useEffect(() => {
    if (city.length > 0 && loc.lat !== "" && loc.lon !== "" && error === "") {
      fetch(url)
      .then(res => res.json())
      .then(function(data) {
        console.log('full data: ', data);
        setWeatherData(data);
      })
      .catch(err => console.log(err))
    }
  }, [loc]);

  function openModal() {
    setModalOpen(true);
  }

  useEffect(() => {
    // console.log(modalOpen);
    if (error !== "") {
      setModalOpen(true);
    }

    if (modalOpen) {
      document.getElementById("cityInput").addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
          closeModal(e);
        }
      });
    }
  }, [error, modalOpen]);


  function closeModal() {
    console.log("city searched: ", document.getElementById("cityInput").value);
    const citySearched = document.getElementById("cityInput").value;
    setCity(citySearched);
    setModalOpen(false);
  }

  return (<Provider value={{
      modalOpen,
      openModal,
      closeModal,
      finalCity,
      country,
      weatherData,
      error
    }}>
    {children}
  </Provider>);
}

export {
  weather,
  WeatherProvider
};
