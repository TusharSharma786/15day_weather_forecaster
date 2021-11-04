import React from 'react';

const ForecastImageDetail = ({image,data}) =>{
    return (
        <div><img src={image} style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: '300px',
            marginLeft: '62em',
            marginBottom: '7em',
            marginTop: '-10em'
            }}/>
            <h4 id='status'>{data[0].weather.description}</h4>
            <div id='details'>
                <h4>Max. temp.- {data[0].high_temp}</h4>
                <h4>Curr. temp.- {data[0].temp}</h4>
                <h4>Low temp.- {data[0].low_temp}</h4>
                <h4>Wind speed- {Math.round(data[0].wind_spd)}mph {data[0].wind_cdir_full}</h4>
            </div>
        </div>
    )
}

export default ForecastImageDetail;
