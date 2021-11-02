import React from 'react';

import ForecastPreview from '../Forecast-Preview/forecast-preview.component';
import ForecastImages from '../Forecast-Images/forecast-images.component';

import './forecast-overview.styles.css';

const ForecastOverview = ({data,city}) => {
    return (
        <div>
            <h1 id="contents">{city}</h1>
            {data &&
                data.length === 0 ? (
                    <p></p>
                ) : (
                    <ForecastImages data = {data}/>
                )
                )
            }
            {data &&
                (data.length === 0
                ? <p></p>
                : (
                    <div id='items'>
                        {data.map(data => (
                            <div id='body'><ForecastPreview key={data.datetime} data = {data}/></div>
                        ))}
                    </div>
                )
                )
            }
        </div>
    )
}

export default ForecastOverview;
