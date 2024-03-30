// src/components/Dashboard.js
import React from 'react';
import WeatherInfo from './WeatherInfo';
import MoonPhaseInput from './MoonPhaseInput';
import HistoricalDataTable from './HistoricalDataTable';

const Dashboard = ({ data }) => {
    return (
        <div className="dashboard">
            {/* Sidebar */}
            {/* Top bar */}
            <WeatherInfo temperature={data.lowTemp} />
            <MoonPhaseInput />
            <HistoricalDataTable historicalData={data.historicalData} />
        </div>
    );
};

export default Dashboard;
