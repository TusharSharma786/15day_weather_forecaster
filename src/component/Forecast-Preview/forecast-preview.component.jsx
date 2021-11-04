import React from 'react';

import './forecast-preview.styles.css';

const ForecastPreview = ({data}) => {
    return (
        <div id='forecast-item'>
            <div id='content'>
                <h4>{data.datetime}</h4>
                <h4>Weather- {data.weather.description}</h4>
                <h4>Max. temp.- {data.high_temp}&#8451;</h4>
                <h4>Curr. temp.- {data.temp}&#8451;</h4>
                <h4>Low temp.- {data.low_temp}&#8451;</h4>
                <h4>Wind speed- {Math.round(data.wind_spd)}mph</h4>
                <h4>Direction- {data.wind_cdir_full}</h4>
            </div>
        </div>
    )
}

export default ForecastPreview;