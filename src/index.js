import React from 'react';
import ReactDom from 'react-dom';
import "./styles.css";
import App from './App';
import {WeatherProvider} from './context';

ReactDom.render(
  <WeatherProvider>
    <App/>
  </WeatherProvider>,
   document.getElementById("root")
 );
