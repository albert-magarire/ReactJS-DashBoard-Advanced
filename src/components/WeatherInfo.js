// src/components/WeatherInfo.js
import React from 'react';

const WeatherInfo = ({ temperature }) => {
    return (
        <div className="weather-info">
            <h2>Low Temp</h2>
            <p>{temperature}°F</p>
        </div>
    );
};

export default WeatherInfo;
