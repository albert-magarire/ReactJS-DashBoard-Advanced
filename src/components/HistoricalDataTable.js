// src/components/HistoricalDataTable.js
import React from 'react';

const HistoricalDataTable = ({ historicalData }) => {
    return (
        <table className="historical-data-table">
            <thead>
            <tr>
                <th>Date</th>
                <th>Temperature</th>
                <th>Moon Rise</th>
                <th>Moon Phase</th>
            </tr>
            </thead>
            <tbody>
            {historicalData.map((item) => (
                <tr key={item.date}>
                    <td>{item.date}</td>
                    <td>{item.temperature}°F</td>
                    <td>{item.moonRise}</td>
                    <td>{item.moonPhase}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default HistoricalDataTable;
